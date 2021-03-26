pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building'
              docker-compose -f docker-compose.yaml -p selenium up
            }
        }
    
    
        stage('Test') {
            steps {
                echo 'Testing'
              codeceptjs run ./tests/logintest.js 
            }
        }
    }
        
    }
