#!/bin/sh

docker run --rm -v $PWD:/home/marp/app/ -e LANG=$LANG -e MARP_USER="$(id -u):$(id -g)"  marpteam/marp-cli  src/pages/presentation.md  --allow-local-files true --html --pdf

