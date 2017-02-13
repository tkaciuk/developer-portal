#!/usr/bin/env bash

echo 'Compiling pages'
gulp compile-pages

echo 'Compiling assets'
gulp build-assets

echo 'Synchronizing dist with S3'
aws s3 sync ./dist/ s3://docs.adtechmedia.io --delete --exact-timestamps --region eu-central-1 --storage-class REDUCED_REDUNDANCY

echo 'Done'
