#!/bin/bash

APP="Node with Coverage"

nvm use 18

echo "$APP Installing"
npm install

TAG=node_with_coverage:local_$(date "+%Y-%m-%d-%H-%M-%S")

echo "Current Building TAG : $TAG"
docker build -t $TAG .

echo "$APP build completed and image is : $TAG"
#docker run -d -p 3000:3000 $TAG

#echo "$APP deployed successfully"
