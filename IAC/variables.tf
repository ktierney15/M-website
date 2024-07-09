variable "aws_access_key" {
  description = "The AWS access key ID."
  default     = ""
}

variable "aws_secret_key" {
  description = "The AWS secret access key."
  default     = ""
}

variable "app_name" {
  description = "name of application"
}

variable "version" {
  description = "version of application"
}

variable "source_path" {
  description = "location of your application code"
}

variable "cloudfront_origin_path" {
  description = "cloudfront origin path"
}

variable "default_root_object" {
  description = "root object"
  default = "index.html"
}
