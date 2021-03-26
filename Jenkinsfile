pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building'
              sh "docker-compose -f docker-compose.yaml -p selenium up"
            }
        }
    
    
        stage('Test') {
            steps {
                echo 'Testing'
              sh "codeceptjs run ./tests/logintest.js "
            }
        }
     
        
    }
