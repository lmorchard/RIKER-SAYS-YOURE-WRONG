#!/bin/bash
kicker -c -e 's3cmd -vfrP --exclude="*swp" --exclude=".git*" sync . s3://youre-wrong.apps.lmorchard.com/'
