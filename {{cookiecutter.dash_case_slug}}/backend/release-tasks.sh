#!/bin/bash

cd /app/webapp/backend
python3 manage.py collectstatic --no-input
python3 manage.py migrate --noinput
