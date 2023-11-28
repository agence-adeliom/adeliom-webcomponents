import 'leaflet.locatecontrol';
import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { bound } from '../../internal/bound.js';
import { LocalizeController } from '../../utilities/localize.js';
import { property } from 'lit/decorators.js';
import styles from './map-geolocation.styles.js';
import type { CSSResultGroup } from 'lit';
import type { LatLngBounds } from 'leaflet';

/**
 * @summary Element which controls geolocation
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-controls-geolocation--docs
 * @status experimental
 * @since 1.0
 *
 * @event {L.LocationEvent} locationfound - when geolocation (using the locate method) went successfully.
 * @event {L.ErrorEvent} locationerror - when geolocation (using the locate method) failed.
 */
export default class AWCMapGeolocation extends AWCLeafletElement {
  static styles: CSSResultGroup = styles;

  // @ts-expect-error: ambient property. see https://github.com/microsoft/TypeScript/issues/40220
  container: L.Map;

  control: L.Control.Locate & { _icon?: HTMLElement };

  private readonly localize = new LocalizeController(this);

  /**
   * The position of the control (one of the map corners).
   * Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
   */
  @property({ type: String }) position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'topright';

  /**
   * The `start` attribute sets wether location should be detected immediately using W3C geolocation method. You can later stop watching using map.stop() method.
   */
  @property({ type: Boolean }) start = false;

  /**
   * The `watch` attribute sets wether location changes should be continous watching (instead of detecting it once) using W3C watchPosition method. You can later stop watching using map.stop() method.
   */
  @property({ type: Boolean }) watch = true;

  /**
   * The `set-view` attribute sets whether the map view to the user location with respect to detection accuracy, or to world view if geolocation failed.
   *
   */
  @property({ type: String, attribute: 'set-view' }) setView:
    | false
    | 'once'
    | 'always'
    | 'untilPan'
    | 'untilPanOrZoom' = 'always';

  /**
   * Keep the current map zoom level when setting the view and only pan.
   */
  @property({ type: Boolean, attribute: 'keep-current-zoom-level' }) keepCurrentZoomLevel = true;

  /**
   * After activating the plugin by clicking on the icon, zoom to the selected zoom level, even when keepCurrentZoomLevel is true. Set to 'false' to disable this feature.
   */
  @property({ attribute: 'initial-zoom-level' }) initialZoomLevel: false | number = false;

  /**
   * Smooth pan and zoom to the location of the marker.
   */
  @property({ type: Boolean, attribute: 'fly-to' }) flyTo = true;

  /**
   * The user location can be inside and outside the current view when the user clicks on the
   * control that is already active. Both cases can be configures separately.
   * Possible values are:
   *  - 'setView': zoom and pan to the current location
   *  - 'stop': stop locating and remove the location marker
   */
  @property({ type: Object, attribute: 'click-behavior' }) clickBehavior = {
    /** What should happen if the user clicks on the control while the location is within the current view. */
    inView: 'stop',
    /** What should happen if the user clicks on the control while the location is outside the current view. */
    outOfView: 'setView',
    /**
     * What should happen if the user clicks on the control while the location is within the current view
     * and we could be following but are not. Defaults to a special value which inherits from 'inView';
     */
    inViewNotFollowing: 'inView'
  };

  /**
   * If set, save the map bounds just before centering to the user's
   * location. When control is disabled, set the view back to the
   * bounds that were saved.
   */
  @property({ type: Boolean, attribute: 'return-to-prev-bounds' }) returnToPrevBounds = false;

  /**
   * Keep a cache of the location after the user deactivates the control. If set to false, the user has to wait
   * until the locate API returns a new location before they see where they are again.
   */
  @property({ type: Boolean, attribute: 'cache-location' }) cacheLocation = true;

  /** If set, a circle that shows the location accuracy is drawn. */
  @property({ type: Boolean, attribute: 'draw-circle' }) drawCircle = true;

  /** If set, the marker at the users' location is drawn. */
  @property({ type: Boolean, attribute: 'draw-marker' }) drawMarker = true;

  /** If set and supported then show the compass heading */
  @property({ type: Boolean, attribute: 'show-compass' }) showCompass = true;

  /** Display a pop-up when the user click on the inner marker. */
  @property({ type: Boolean, attribute: 'show-popup' }) showPopup = true;

  /** Use metric units. */
  @property({ type: Boolean, attribute: 'metric' }) metric = true;

  /** The `max-zoom` attribute sets the maximum zoom for automatic view setting when using `setView` option. */
  @property({ type: Number, attribute: 'max-zoom' }) maxZoom = Number.MAX_SAFE_INTEGER;

  /**  The `timeout` attribute sets the number of milliseconds to wait for a response from geolocation before firing a locationerror event. */
  @property({ type: Number }) timeout = 10_000;

  /**
   * The `maximum-age` attribute sets maximum age of detected location. If less than this amount of milliseconds passed since last geolocation response, locate will return a cached location.
   */
  @property({ type: Number, attribute: 'maximum-age' }) maximumAge = 0;

  /**
   * The `enable-high-accuracy` attribute sets whether high accuracy is enabled, see description in the W3C spec.
   */
  @property({ type: Boolean, attribute: 'enable-high-accuracy' }) enableHighAccuracy = false;

  /**
   * The `latitude` attribute returns the detected geographical location of the user.
   */
  @property({ type: Number }) latitude: number | null = null;

  /**
   * The `longitude` attribute returns the detected geographical location of the user.
   */
  @property({ type: Number }) longitude: number | null = null;

  /**
   * The `bounds` attribute returns the geographical bounds of the area user is located in (with respect to the accuracy of location).
   */
  @property({ type: Object }) bounds: LatLngBounds | null = null;

  /**
   * The `accuracy` attribute returns the accuracy of location in meters.
   */
  @property({ type: Number }) accuracy: number | null = null;

  /**
   * The `altitude` attribute returns the height of the position above the WGS84 ellipsoid in meters.
   */
  @property({ type: Number }) altitude: number | null = null;

  /**
   * The `altitude-accuracy` attribute returns the accuracy of altitude in meters.
   *
   */
  @property({ type: Number, attribute: 'altitude-accuracy' }) altitudeAccuracy: number | null = null;

  /**
   * The `heading` attribute returns the direction of travel in degrees counting clockwise from true North.
   */
  @property({ type: Number }) heading: number | null = null;

  /**
   * The `speed` attribute returns the current velocity in meters per second.
   */
  @property({ type: Number }) speed: number | null = null;

  /**
   * The `timestamp` attribute returns the time when the position was acquired.
   */
  @property({ type: Number }) timestamp: number | null = null;

  /**
   * Accuracy circle style properties. NOTE these styles should match the css animations styles
   */
  @property({ type: Object, attribute: 'circle-style' }) circleStyle?: L.CircleMarkerOptions = {
    className: 'leaflet-control-locate-circle',
    color: '#136AEC',
    fillColor: '#136AEC',
    fillOpacity: 0.15,
    weight: 0
  };

  /**
   * Inner marker style properties. Only works if your marker class supports `setStyle`.
   */
  @property({ type: Object, attribute: 'marker-style' }) markerStyle?: L.CircleMarkerOptions | L.MarkerOptions = {
    className: 'leaflet-control-locate-marker',
    color: '#fff',
    fillColor: '#2A93EE',
    fillOpacity: 1,
    weight: 3,
    opacity: 1,
    radius: 9
  };

  /**
   * Compass style properties.
   */
  @property({ type: Object, attribute: 'compass-style' }) compassStyle?: L.PathOptions & {
    radius: number;
    width: number;
    depth: number;
  } = {
    fillColor: '#2A93EE',
    fillOpacity: 1,
    weight: 0,
    color: '#fff',
    opacity: 1,
    radius: 9, // How far is the arrow from the center of the marker
    width: 9, // Width of the arrow
    depth: 6 // Length of the arrow
  };

  /**
   * The `icon` attribute sets the icon for the locate control.
   *
   */
  @property({ type: String }) icon: string = 'cursor-fill';

  containerChanged(): void {
    if (!this.container) return;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    this.control = L.control.locate({
      setView: this.setView,
      keepCurrentZoomLevel: this.keepCurrentZoomLevel,
      initialZoomLevel: this.initialZoomLevel,
      flyTo: this.flyTo,
      clickBehavior: this.clickBehavior,
      returnToPrevBounds: this.returnToPrevBounds,
      cacheLocation: this.cacheLocation,
      drawCircle: this.drawCircle,
      drawMarker: this.drawMarker,
      showCompass: this.showCompass,
      showPopup: this.showPopup,
      metric: this.metric,
      position: this.position,
      circleStyle: this.circleStyle,
      markerStyle: this.markerStyle,
      compassStyle: this.compassStyle,
      locateOptions: {
        watch: this.watch,
        setView: false,
        maxZoom: this.maxZoom,
        timeout: this.timeout,
        maximumAge: this.maximumAge,
        enableHighAccuracy: this.enableHighAccuracy
      },
      strings: {
        title: this.localize.term('locateMe'),
        metersUnit: this.localize.term('metersUnit'),
        feetUnit: this.localize.term('feetUnit'),
        popup: this.localize.term('locatePopup'),
        outsideMapBoundsMsg: this.localize.term('locateOutsideMapBounds')
      }
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.control.addTo(this.container);

    if (this.icon && this.control._icon) {
      this.control._icon.innerHTML = `<awc-icon name="${this.icon}"></awc-icon><awc-spinner></awc-spinner>`;
    }

    if (this.start) {
      this.control.start();
    }

    this.container.on('locationfound locationerror', this.onLeafletEvent);

    this.container.on('locationfound', this.onLocationfound);
  }

  disconnectedCallback(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (this.container && this.control) this.container.removeControl(this.control);
  }

  @bound
  onLocationfound(e: L.LocationEvent): void {
    this.latitude = e.latlng.lat;
    this.longitude = e.latlng.lng;
    this.bounds = e.bounds;
    this.accuracy = e.accuracy;
    this.altitude = e.altitude;
    this.altitudeAccuracy = e.altitudeAccuracy;
    this.heading = e.heading;
    this.speed = e.speed;
    this.timestamp = e.timestamp;
  }
}
