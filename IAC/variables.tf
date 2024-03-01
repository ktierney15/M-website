variable "aws_access_key" {
  description = "The AWS access key ID."
  default     = ""
}

variable "aws_secret_key" {
  description = "The AWS secret access key."
  default     = ""
}

variable "application_version" {
    description = "version of the applicaiton that we are deploying to ecs"
}