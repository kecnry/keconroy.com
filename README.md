This is the source-code for my personal website: [keconroy.com](http://www.keconroy.com).

## License

Note that the source-code for this website is released under the [GPL 3 License](./LICENSE), but the copyright on included content (i.e. photos, images, pdfs, text, etc) are retained.  If you fork or take a portion of the code, please remove all material.


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

NOTE: used to deploy on GitHub pages, but causes issues with Google indexing due
to having to override the 404 response.

### Surge

NOTE: surge currently does not serve pdf files, so pdf files are still served
by the GitHub repository itself.

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

Relevant Surge instructions:
* [Adding collaborators](https://surge.sh/help/adding-collaborators)
* [DNS instructions for custom domain](https://surge.sh/help/adding-a-custom-domain).


## React

See the [React README](README_REACT.md) for more information.
