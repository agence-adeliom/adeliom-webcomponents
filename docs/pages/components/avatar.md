---
meta:
  title: Avatar
  description: Avatars are used to represent a person or object.
layout: component
---

By default, a generic icon will be shown. You can personalize avatars by adding custom icons, initials, and images. You should always provide a `label` for assistive devices.

```html:preview
<awc-avatar label="User avatar"></awc-avatar>
```

```jsx:react
import { AWCAvatar } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCAvatar label="User avatar" />;
```

## Examples

### Images

To use an image for the avatar, set the `image` and `label` attributes. This will take priority and be shown over initials and icons.
Avatar images can be lazily loaded by setting the `loading` attribute to `lazy`.

```html:preview
<awc-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></awc-avatar>
<awc-avatar
  image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a white and grey kitten on grey textile"
  loading="lazy"
></awc-avatar>
```

```jsx:react
import { AWCAvatar } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <AWCAvatar
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a gray tabby kitten looking down"
  />
  <AWCAvatar
    image="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    label="Avatar of a white and grey kitten on grey textile"
    loading="lazy"
  />
);
```

### Initials

When you don't have an image to use, you can set the `initials` attribute to show something more personalized than an icon.

```html:preview
<awc-avatar initials="SL" label="Avatar with initials: SL"></awc-avatar>
```

```jsx:react
import { AWCAvatar } from '@agence-adeliom/awc/dist/react';

const App = () => <AWCAvatar initials="SL" label="Avatar with initials: SL" />;
```

### Custom Icons

When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the `icon` slot.

```html:preview
<awc-avatar label="Avatar with an image icon">
  <awc-icon slot="icon" name="image"></awc-icon>
</awc-avatar>

<awc-avatar label="Avatar with an archive icon">
  <awc-icon slot="icon" name="archive"></awc-icon>
</awc-avatar>

<awc-avatar label="Avatar with a briefcase icon">
  <awc-icon slot="icon" name="briefcase"></awc-icon>
</awc-avatar>
```

```jsx:react
import { AWCAvatar, AWCIcon } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCAvatar label="Avatar with an image icon">
      <AWCIcon slot="icon" name="image" />
    </AWCAvatar>

    <AWCAvatar label="Avatar with an archive icon">
      <AWCIcon slot="icon" name="archive" />
    </AWCAvatar>

    <AWCAvatar label="Avatar with a briefcase icon">
      <AWCIcon slot="icon" name="briefcase" />
    </AWCAvatar>
  </>
);
```

### Shapes

Avatars can be shaped using the `shape` attribute.

```html:preview
<awc-avatar shape="square" label="Square avatar"></awc-avatar>
<awc-avatar shape="rounded" label="Rounded avatar"></awc-avatar>
<awc-avatar shape="circle" label="Circle avatar"></awc-avatar>
```

```jsx:react
import { AWCAvatar, AWCIcon } from '@agence-adeliom/awc/dist/react';

const App = () => (
  <>
    <AWCAvatar shape="square" label="Square avatar" />
    <AWCAvatar shape="rounded" label="Rounded avatar" />
    <AWCAvatar shape="circle" label="Circle avatar" />
  </>
);
```

### Avatar Groups

You can group avatars with a few lines of CSS.

```html:preview
<div class="avatar-group">
  <awc-avatar
    image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
    label="Avatar 1 of 4"
  ></awc-avatar>

  <awc-avatar
    image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 2 of 4"
  ></awc-avatar>

  <awc-avatar
    image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
    label="Avatar 3 of 4"
  ></awc-avatar>

  <awc-avatar
    image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
    label="Avatar 4 of 4"
  ></awc-avatar>
</div>

<style>
  .avatar-group awc-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group awc-avatar::part(base) {
    border: solid 2px var(--awc-color-neutral-0);
  }
</style>
```

```jsx:react
import { AWCAvatar, AWCIcon } from '@agence-adeliom/awc/dist/react';

const css = `
  .avatar-group awc-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group awc-avatar::part(base) {
    border: solid 2px var(--awc-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="avatar-group">
      <AWCAvatar
        image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"
        label="Avatar 1 of 4"
      />

      <AWCAvatar
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 2 of 4"
      />

      <AWCAvatar
        image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"
        label="Avatar 3 of 4"
      />

      <AWCAvatar
        image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"
        label="Avatar 4 of 4"
      />
    </div>

    <style>{css}</style>
  </>
);
```
