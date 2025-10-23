#!/bin/sh

echo "Pre-Build Steps:"
echo "Authenticating with AWS ECR"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 033557458086.dkr.ecr.us-east-1.amazonaws.com

echo "Building Docker image"
docker build -t 033557458086.dkr.ecr.us-east-1.amazonaws.com/jkirisa-web-app:latest .

echo "Post-build steps"
docker push 033557458086.dkr.ecr.us-east-1.amazonaws.com/jkirisa-web-app:latest