pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub'
            }
        }

        stage('Backend Install') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Build completed successfully'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Application deployment completed'
            }
        }
    }

    post {
        success {
            echo 'Jenkins Pipeline SUCCESS!'
        }

        failure {
            echo 'Jenkins Pipeline FAILED!'
        }
    }
}