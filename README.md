# DevOps CI/CD Pipeline Project

## Project Overview
This project demonstrates a simple CI/CD pipeline where a Node.js application is automatically built and deployed using Docker and Jenkins on an AWS EC2 instance.

## Architecture

Developer → GitHub → Jenkins → Docker Build → Deploy to EC2 → Nginx Reverse Proxy → User Access

## Tools Used
- GitHub (Source Code Management)
- Jenkins (CI/CD Automation)
- Docker (Containerization)
- AWS EC2 (Cloud Server)
- Nginx (Reverse Proxy)
- Node.js (Sample Application)

## Pipeline Workflow

1. Developer pushes code to GitHub.
2. Jenkins pulls the latest code from the repository.
3. Jenkins builds a Docker image of the application.
4. Jenkins stops the old container (if running).
5. Jenkins deploys a new container.
6. Nginx acts as a reverse proxy and exposes the application to users.

## Docker Commands Used

docker build -t devops-app .

docker stop devops-container || true

docker rm devops-container || true

docker run -d -p 3000:3000 --name devops-container devops-app

## Application Access

http://EC2-PUBLIC-IP

## Project Goal

The goal of this project is to demonstrate a complete DevOps workflow including CI/CD automation, containerization, and cloud deployment.

## Future Improvements

- Add GitHub Webhooks to trigger Jenkins automatically
- Implement Infrastructure as Code using Terraform
- Use Kubernetes for container orchestration
