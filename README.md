# 🚀 React CI/CD with Docker & GitHub Actions

A modern React application automated with a full CI/CD pipeline, dockerized for consistency, and hosted on **AWS EC2**.

## 🛠️ Tech Stack
- **Frontend:** [React](https://react.dev)
- **Containerization:** [Docker](https://docker.com) & [Docker Compose](https://docker.com)
- **Web Server:** [Nginx](https://nginx.com)
- **CI/CD:** [GitHub Actions](https://github.com)
- **Cloud Provider:** [AWS EC2](https://amazon.com)

## 🚀 Local Development

### Prerequisites
- Docker and Docker Compose installed.

### Steps to Run
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```
2. **Start the application:**
   ```bash
   docker-compose up --build
   ```
3. **View the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ CI/CD Pipeline
This project uses **GitHub Actions** to automate deployment to AWS EC2 whenever code is pushed to the `main` branch.

### Deployment Workflow:
1. **Build Stage:** GitHub Actions checks out the code and builds the Docker image.
2. **Deploy Stage:** Connects to the **EC2 instance** via SSH using stored [GitHub Secrets](https://github.com/marketplace/actions/deploy-docker-to-aws-ec2).
3. **Execution:** Syncs the new build files and restarts the container on the server.

## 🔒 Required Secrets
To make the deployment work, add these to your GitHub Repo under **Settings > Secrets > Actions**:
- `SSH_PRIVATE_KEY`: Your AWS `.pem` file content.
- `SSH_HOST`: Your EC2 Public IP.
- `USER_NAME`: Default server user (e.g., `ubuntu`).

## 📁 Project Structure
- `/src`: React source code.
- `/public`: Static assets.
- `Dockerfile`: Multi-stage build for production.
- `docker-compose.yml`: Local orchestration.
- `nginx.conf`: Nginx routing configuration.
