output "public_ip" {
  description = "The public IP address of the EC2 instance"
  value       = aws_instance.app_server.public_ip
}

output "ssh_connection_string" {
  description = "Command to SSH into the instance"
  value       = "ssh -i ${var.key_name}.pem ubuntu@${aws_instance.app_server.public_ip}"
}

output "web_frontend_url" {
  description = "The URL to access the Mock Exam Simulator UI"
  value       = "http://${aws_instance.app_server.public_ip}:4173"
}

output "backend_api_url" {
  description = "The URL to access the backend API"
  value       = "http://${aws_instance.app_server.public_ip}:4000"
}
