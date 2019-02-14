#!/bin/bash

python3 backend/manage.py makemigrations --noinput
python3 backend/manage.py migrate --noinput
python3 backend/manage.py load_initial_data
