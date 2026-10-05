stage('Docker Build') {
    steps {
        sh '''
            cd frontend
            docker build -t my-frontend .
        '''
    }
}

stage('Deployment') {
    steps {
        sh '''
            docker rm -f frontend-container || true

            docker run -d \
                --name frontend-container \
                -p 80:80 \
                my-frontend
        '''
    }
}

stage('Verification') {
    steps {
        sh '''
            sleep 3
            curl http://localhost
        '''
    }
}
