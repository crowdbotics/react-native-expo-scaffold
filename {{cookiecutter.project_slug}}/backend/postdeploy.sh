
#!/bin/bash

python3 manage.py makemigrations --noinput
python3 manage.py migrate --noinput
python3 manage.py load_initial_data
