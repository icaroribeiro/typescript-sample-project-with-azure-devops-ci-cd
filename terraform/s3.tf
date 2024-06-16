resource "aws_s3_bucket" "example" {
  bucket = "tfstate-bucket-${var.service}"
}
