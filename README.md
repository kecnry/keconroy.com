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
npm serve
```

to create a local webserver running the site.


## Deploying

In the root directory, issue:

```
npm run deploy
```

will need to provide github username and password (api token) 2-3 times.  This
will build the website and commit and push to the `gh-pages` branch.  It may take
a few minutes before those changes then go live.


## React

See the [React README](README_REACT.md) for more information.
