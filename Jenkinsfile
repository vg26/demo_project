pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               
              docker-compose -f docker-compose.yaml -p selenium up
            }
        }
    
    
        stage('Test') {
            steps {
                
              codeceptjs run ./tests/logintest.js 
            }
        }
    }
        
    }
