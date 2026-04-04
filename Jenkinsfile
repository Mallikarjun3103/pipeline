pipeline {
    agent any

    stages {

        stage('SCM checkout') {
            steps {
                checkout scm
            }
        }




        stage('build stage') {
            steps {
                echo "building war file....."
            }
        }

        stage('deploy') {
            steps {
                echo "deploying the code"
            }
        }

    }
}
