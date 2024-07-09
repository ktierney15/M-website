provider "aws" {
  region = "us-east-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}


locals {
  content_type_map = {
    "js" = "application/javascript"
    "jsx" = "application/javascript"
    "html" = "text/html"
    "css" = "text/css"
    "json" = "application.json"
  }
}

terraform {
  backend "s3" {
    bucket         = "terraform-state-files"
    key            = "${var.app_name}/terraform.tfstate"
    region         = "us-east-1"
  }
}