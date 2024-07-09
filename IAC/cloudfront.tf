resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for cloudfront to access application"
}

resource "aws_cloudfront_distribution" "app" {
  origin {
    domain_name = "${aws_s3_bucket.bucket.bucket}.s3.amazonaws.com"
    origin_id = "S3-${var.app_name}"
    origin_path = var.cloudfront_origin_path

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = "S3-${var.app_name}"
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  enabled = true
  is_ipv6_enabled = true
  default_root_object = var.default_root_object

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

}