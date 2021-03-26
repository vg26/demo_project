pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               
              sh "docker-compose -f docker-compose.yaml -p selenium up"
            }
        }
    
    
        stage('Test') {
            steps {
                
              sh "codeceptjs run ./tests/logintest.js"
            }
        }
    }
        
    }
