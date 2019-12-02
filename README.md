# homepage-repo

Source code for my [homepage](https://sujeevraja.github.io).

## Testing
First, run `npm run start`. This command rebuilds "bin/app.js" whenever any
JS file in the "src/" folder changes.

Next, run `npm run bs`. This launches the default browser and serves
"index.html" at `https://localhost:3000`. This command uses Browsersync to
reload the webpage whenever "index.html", "bin/app.js" or any asset files
change.

## Deploying

The public webpage using a separate [repo](https://github.com/sujeevraja/sujeevraja.github.io).  To
deploy any changes, run `npm run deploy`. This will copy updated files to the `deploy` folder. This
folder is a submodule containing the public webpage repo. After committing the submodule, the
changes should become public.

