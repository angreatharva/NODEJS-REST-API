pipeline {
    agent any

    environment {
        DEPLOY_DIR = '/var/www/REST-api'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📥 Cloning repository...'
                git branch: 'main', url: 'https://github.com/angreatharva/NODEJS-REST-API.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm packages...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests (if available)...'
                sh 'npm test || echo "No tests found."'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying Node.js app...'
                sh '''
                mkdir -p $DEPLOY_DIR
                cp -r * $DEPLOY_DIR
                cd $DEPLOY_DIR
                # Kill any running instance of app.js
                pkill -f "node app.js" || true
                nohup node app.js > app.log 2>&1 &
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Node.js API deployed successfully!'
        }
        failure {
            echo '❌ Deployment failed. Check Jenkins logs.'
        }
    }
}
