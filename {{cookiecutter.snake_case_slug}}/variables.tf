variable "app_name" {
  description = "Unique name of the app"
  type = "string"
  default = "{{cookiecutter.dash_case_slug}}"
}

variable "custom_domain" {
  description = "Custom domain name (optional)"
  type = "string"
  default = "{{cookiecutter.custom_domain}}"
}

variable "dyno_size" {
  description = "Size of Heroku dynos"
  type = "string"
  default = "standard-2X"
}

variable "repo_url" {
    description = "URL to the git repo"
    type = "string"
    default = "{{cookiecutter.github_url}}"
}

variable "heroku_team" {
  description = "Heroku team / organization name"
  type = "string"
  default = "crowdbotics-users"
}
