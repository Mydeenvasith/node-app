pipeline {
  agent any
  stages {
    stage("build"){ 
      steps{
        sh 'npm install'
      }
      
    }
    stage("test"){ 
      steps{
        echo 'tested'
      }
      
    }
    stage("deploy"){ 
      steps{
         echo 'deployed'
      }
      
    }
  }

}
