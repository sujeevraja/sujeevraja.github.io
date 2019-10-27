# homepage-repo

This repository contains source code for my [homepage](https://sujeevraja.github.io).

## Local testing

To view the page locally, use `npm run build`. This bundles the Javascript files into a single file.
Then, run a local server. With python, the command is `python3 -m http.server`. Then, the page can
be viewed at the address `https://localhost:8000` in a browser.

## Deploying

The public webpage using a separate [repo](https://github.com/sujeevraja/sujeevraja.github.io).  To
deploy any changes, run `npm run deploy`. This will copy updated files to the `deploy` folder. This
folder is a submodule containing the public webpage repo. After committing the submodule, the
changes should become public.

