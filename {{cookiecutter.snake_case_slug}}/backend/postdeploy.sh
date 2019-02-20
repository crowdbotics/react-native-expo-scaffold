#!/bin/bash

cd /app/webapp/backend
python3 manage.py collectstatic --no-input
python3 manage.py migrate --noinput
python3 manage.py load_initial_data
