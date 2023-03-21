#!/bin/bash

npm run build
cd build
echo 'moneeto.github.io' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/moneeto/click-counter.github.io.git master:gh-pages