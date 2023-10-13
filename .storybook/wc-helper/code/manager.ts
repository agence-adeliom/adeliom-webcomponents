import { addons, types } from "@storybook/manager-api";
import {ADDON_ID, PANEL_ID} from "./constants";
import { Panel } from "./Panel";
import {withSource} from "./withSource";

export const decorators = [
  withSource
];

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Code",
    match: ({ viewMode }) => viewMode == "story",
    render: Panel
  });
});
