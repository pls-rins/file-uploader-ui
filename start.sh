#! /bin/bash

# Update the PATH variable with local binary folders
export PATH=$PATH:./node_modules/.bin:./node_modules/typescript/.bin

# Run casperjs
vite dev