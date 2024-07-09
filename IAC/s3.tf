resource "aws_s3_bucket" "bucket" {
  bucket = "kt15-${var.app_name}"
  tags = {
    "Github Repository" = "https://github.com/ktierney15/${var.app_name}"
    "Version" = var.version
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = "kt15-${var.app_name}"
  policy = data.aws_iam_policy_document.cloudfront.json
}

data "aws_iam_policy_document" "cloudfront" {
  statement {
    sid = "1"
    principals {
      type = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.oai.iam_arn]
    }
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "${aws_s3_bucket.bucket.arn}/*"
    ]
  }
}

resource "aws_s3_object" "app" {
  for_each = fileset("${var.source_path}", "**")
  bucket = aws_s3_bucket.bucket.bucket
  key = each.value
  source = "${var.source_path}/${each.value}"
  etag = filemd5("${var.source_path}/${each.value}")
  content_type = lookup(local.content_type_map, split(".", "${var.source_path}/${each.value}")[1], "application/octet-stream")
}
