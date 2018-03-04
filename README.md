This is the source-code for my personal website: [keconroy.com](http://www.keconroy.com).

**NOTE** this is currently a work-in-progress to migrate my existing ember-based
site to React.

## License

Note that the source-code for this website is released under the [GPL 3 License](./LICENSE), but the copyright on included content (i.e. photos, images, text, etc) are retained.  If you fork or take a portion of the code, please remove all material.


## Dependencies

see [installing node and npm on Ubuntu](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/)

  * node
  * npm


## Serving locally

In the root directory, issue:

```
npm install
```

to install local dependencies, and then:

```
npm start
```

to create a local webserver running the site.


## Deploying

Install surge (may need sudo):

```
npm install -g surge
```

In the root directory, build:

```
npm run build
```

Upload to surge:
```
cd build
surge
```

## React

See the [React README](README_REACT.md) for more information.
