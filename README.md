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

### GitHub pages

In the root directory, issue:

```
npm run deploy
```

will need to provide github username and password (api token) 2-3 times.  This
will build the website and commit and push to the `gh-pages` branch.  It may take
a few minutes before those changes then go live.


To serve to a separate URL, edit the entry in [CNAME](./public/CNAME), the value of homepage in [package.json](./package.json), and follow the [github instructions](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) to use a custom domain for pointing the DNS to github pages.

### Surge

(NOTE: surge currently does not serve pdf files)

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

See [Surge DNS instructions](https://surge.sh/help/adding-a-custom-domain).

## React

See the [React README](README_REACT.md) for more information.
