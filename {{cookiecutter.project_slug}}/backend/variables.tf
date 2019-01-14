
variable "app_name" {
  description = "Unique name of the app"
  type = "string"
  default = "{{cookiecutter.project_slug}}"
}

variable "custom_domain" {
  description = "Custom domain name (optional)"
  type = "string"
  default = ""
}
