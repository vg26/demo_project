pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               echo "Building"
              bat "docker-compose -f docker-compose.yaml -p selenium up"
            }
        }
    
    
        stage('Test') {
            steps {
              echo "Testing"  
              bat "codeceptjs run ./tests/logintest.js"
            }
        }
    }
        
    }
