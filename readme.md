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
- Open [`http://localhost:8000/`](http://localhost:8000/)
- Edit files in `src` only
- Changes to JS will be compiled into `dev` automatically

## Release

- `npm run release`
- Files will be compiled into `build`
- `npm run serveBuild`
- Open [`http://localhost:8001/`](http://localhost:8001/)

## Using

- 6to5: precompiler for ES6 syntax down to ES5 compatible JS
- browserify: compiles commonjs/npm modules for the browser
- React: efficient views for your app
- ramda: fp library for js