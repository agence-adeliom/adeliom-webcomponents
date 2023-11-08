# Adeliom WebComponents

A forward-thinking library of web components.

- Works with all frameworks 🧩
- Works with CDNs 🚛
- Fully customizable with CSS 🎨
- Includes an official dark theme 🌛
- Built with accessibility in mind ♿️
- Open source 😸

---

Documentation: [awc.a-dev.cloud](https://awc.a-dev.cloud)

Source: [github.com/agence-adeliom/awc](https://github.com/agence-adeliom/awc)

---

You can use this documentation to learn how to build AWC from source. You will need Node >= 14.17 to build and run the project locally.

**You don't need to do any of this to use AWC!** This page is for people who want to contribute to the project, tinker with the source, or create a custom build of AWC.

If that's not what you're trying to do, the [documentation website](https://awc.a-dev.cloud) is where you want to be.

### What are you using to build AWC?

Components are built with [LitElement](https://lit-element.polymer-project.org/), a custom elements base class that provides an intuitive API and reactive data binding. The build is a custom script with bundling powered by [esbuild](https://esbuild.github.io/).

### Forking the Repo

Start by [forking the repo](https://github.com/agence-adeliom/awc/fork) on GitHub, then clone it locally and install dependencies.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/awc
cd awc
npm install
```

### Developing

Once you've cloned the repo, run the following command.

```bash
npm start
```

This will spin up the dev server. After the initial build, a browser will open automatically. There is currently no hot module reloading (HMR), as browser's don't provide a way to reregister custom elements, but most changes to the source will reload the browser automatically.

### Building

To generate a production build, run the following command.

```bash
npm run build
```

### Creating New Components

To scaffold a new component, run the following command, replacing `tag-name` with the desired tag name.

```bash
npm run create awc-tag-name
```

This will generate a source file, a stylesheet, and a docs page for you. When you start the dev server, you'll find the new component in the "Components" section of the sidebar.

### Contributing

AWC is an open source project and contributions are encouraged! If you're interesting in contributing, please review the [contribution guidelines](CONTRIBUTING.md) first.

## License

AWC is available under the terms of the MIT license.
