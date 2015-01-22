# 6to5 React

A test repo for setting up ES6>ES5 precompilation for React projects

## Requirements

- [node](http://nodejs.org/)
- npm
- OSX

## Setup

- `npm i`

## Development

- `npm start`
- Edit files in `src` only
- Changes to HTML/STYL/JS will be compiled into `dev` automatically
- Open [`http://localhost:8000/`](http://localhost:8000/) to test

## Release

- `npm run release`
- Files will be compiled into `build`

## Test Release Build

- `npm run releaseServe`
- Open [`http://localhost:8001/`](http://localhost:8001/) to test

## Key dependencies

- 6to5: precompiler for ES6 syntax down to ES5 compatible JS
- browserify: compiles commonjs/npm modules for the browser
- React: efficient views for your app
- ramda: fp library for js
- stylus: css precompilation