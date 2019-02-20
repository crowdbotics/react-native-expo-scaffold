FROM alpine:latest

# Install system dependencies
RUN apk add --no-cache --update \
  bash \
  gcc \
  musl-dev \
  postgresql-dev \
  python3 \
  python3-dev \
  py3-pip \
  git \
  nodejs \
  nodejs-npm
RUN pip3 install --no-cache-dir -q pipenv

# Add our code
ADD ./ /app/webapp/

WORKDIR /app/webapp/frontend

# Install frontend dependencies
RUN npm ci

WORKDIR /app/webapp/backend

# Install backend dependencies
RUN pipenv install --deploy --system

# Run the image as a non-root user
RUN adduser -D myuser
USER myuser

# Run the web server on port $PORT
CMD waitress-serve --port=$PORT {{cookiecutter.snake_case_slug}}.wsgi:application
