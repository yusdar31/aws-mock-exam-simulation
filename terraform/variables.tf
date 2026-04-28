variable "aws_region" {
  description = "The AWS region to deploy to."
  type        = string
  default     = "ap-southeast-1"
}

variable "instance_type" {
  description = "EC2 instance type for the Mock Exam server."
  type        = string
  default     = "t3.micro" 
}

variable "key_name" {
  description = "Name of the auto-generated SSH key pair."
  type        = string
  default     = "aws-mock-exam-key"
}
