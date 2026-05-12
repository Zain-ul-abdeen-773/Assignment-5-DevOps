# Task Manager: DevOps CI/CD Pipeline 🚀

A full-stack Task Manager application built with the MERN stack (MongoDB, Express.js, React, Node.js), fully containerized and automated using a robust CI/CD pipeline with GitHub Actions, AWS ECR, and AWS EC2.

This repository serves as the submission for **DevOps CS316 - Assignment #5**.

---

## 🏗️ Architecture & Technology Stack

**Application Tier (MERN Stack)**
* **Frontend:** React.js (Port `3000`)
* **Backend:** Node.js & Express.js REST API (Port `5000`)
* **Database:** MongoDB (Port `27017`)

**DevOps & Cloud Infrastructure**
* **Containerization:** Docker & Docker Compose V2
* **CI/CD Automation:** GitHub Actions
* **Image Registry:** AWS Elastic Container Registry (ECR)
* **Hosting:** AWS EC2 (Ubuntu 24.04 LTS)
* **Security:** AWS IAM Roles (`AmazonEC2ContainerRegistryPowerUser` & `AmazonEC2ContainerRegistryReadOnly`)

---

## ⚙️ Local Development Setup

To run this application locally for development, ensure you have Docker and Docker Compose installed.

1. **Clone the repository:**
   ~~~bash
   git clone https://github.com/YOUR-USERNAME/taskmanager-devops.git
   cd taskmanager-devops
   ~~~

2. **Start the containers:**
   ~~~bash
   docker compose up --build
   ~~~

3. **Access the application:**
   * Frontend: `http://localhost:3000`
   * Backend API: `http://localhost:5000`

---

## 🔄 CI/CD Workflows

The software delivery lifecycle is fully automated across multiple environments using GitHub Actions.

### 1. Testing Environment (QA)
* **Trigger:** Pull Request to `main`.
* **Flow:** Code Checkout ➡️ Run Tests & Linting ➡️ Build Images ➡️ Push to AWS ECR ➡️ SSH to Testing EC2 ➡️ Pull & Deploy ➡️ Email Notification.
* **Environment:** Live on Testing EC2 Instance.

### 2. Staging Environment (Client/Team)
* **Trigger:** Push or Merge to `main`.
* **Flow:** Code Checkout ➡️ Run Tests & Linting ➡️ Build Images ➡️ Push to AWS ECR ➡️ SSH to Staging EC2 ➡️ Pull & Deploy ➡️ Email Notification.
* **Environment:** Live on Staging EC2 Instance.

---

## 📸 Deployment Evidence

*(Screenshots of the deployment process are located in the `sc/` directory)*

* **Github Repo Setup:** ![Local Setup](sc\git repo.png)
* **AWS EC2 Dashboard:** ![EC2 Instances](sc\Running Instances in AWS.png)
* **AWS ECR Repositories:** ![ECR Repositories](sc\ECR created repositories.png)
* **Testing Workflow Execution:** ![Testing CI/CD](sc\testing workflow success run on github.png)
* **Staging Workflow Execution:** ![Staging CI/CD](sc\staging workflow success on github.png)
* **Live Staging Application:** ![Live App](sc\live app on staging instance.png)

---

## 🔐 Environment Variables & Secrets Reference

To replicate this pipeline, the following secrets must be configured in the GitHub Repository (`Settings > Secrets and variables > Actions`):

| Secret Name | Description |
| :--- | :--- |
| `AWS_ACCESS_KEY_ID` | IAM User access key with ECR Push permissions. |
| `AWS_SECRET_ACCESS_KEY` | IAM User secret key. |
| `AWS_REGION` | The AWS region hosting the ECR and EC2 (e.g., `us-east-1`). |
| `EC2_SSH_KEY` | The `.pem` private key content for EC2 SSH access. |
| `EC2_USER` | The default SSH user (e.g., `ubuntu`). |
| `TESTING_HOST` | The public IPv4 address of the Testing EC2 server. |
| `STAGING_HOST` | The public IPv4 address of the Staging EC2 server. |
| `EMAIL_USERNAME` | The sender email address for workflow notifications. |
| `EMAIL_PASSWORD` | The App Password generated for the sender email. |
| `INSTRUCTOR_EMAIL` | The recipient email address for QA/Deployment notifications. |

---

## 👥 Contributors

* **Zain ul Abdeen** | Reg# 2023773
* **Muhammad Hashir** | Reg# 2023429
* **Course:** DevOps CS316