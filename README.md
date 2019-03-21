# BANDIT

Desktop application for mimicking a bad actor that operates on files, processes, and network connections. Built with Vue and Electron.

## Electron

Note that electron apps run in a chromium browser with the system and title bars removed. Developer tools are available by pressing:

`option` + `command` + `i`

### To run in Electron

`yarn electron:serve`

### To build in Electron, including .dmg and .app files

`yarn electron:build`

## Initial Project setup

Note that you can use NPM or Yarn depending upon your preference. I prefer Yarn.

```

npm install

```

### Compiles and hot-reloads for development

```

npm run serve

```

### Compiles and minifies for production

```

npm run build

```

### Run your tests

```

npm run test

```

### Lints and fixes files

```

npm run lint

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```

```

```

## To create a NEW vuetify / electron app from scratch

`vue create my-app`
`cd my-app`
`vue add vuetify`
`vue add electron-builder`

then...
`yarn serve`

or...
`yarn electron:serve`
```
