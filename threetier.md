## how to deploy a three-tier sample python application 

#### API Server Configuration:

1) create a postgress database in aws RDS 

![preview](./Images/threetier-1.png)

2) Create a Ec2 instance in  with enable public ip.
  
![preview](./Images/threetier-2.png)

3) Login to that Ec2 machine using ssh
   
![preview](./Images/threetier-3.png)

4) Clone the repo in /tmp folder from Ado https://LearningThoughtsEdu@dev.azure.com/LearningThoughtsEdu/Batch-1/_git/three-tier-example
![preview](./Images/threetier-3.png)
   
5)  cd three-tier-example/api/
6)  sudo apt update && sudo apt install python3-pip -y
7)  sudo apt install python3.12-venv
![preview](./Images/threetier-4.png)

8)  Run the below commands to create virtual environment
   ```
   python3 -m venv .venv
   source .venv/bin/activate
   ```
![preview](./Images/threetier-5.png)

9)  sudo apt-get install -y python3-dev libpq-dev
![preview](./Images/threetier-7.png)

10)  Execute this command to install all the dependencies of the project
```
pip3 install -r requirements.txt
```
![preview](./Images/threetier-8.png)   

11) python app.py
The api server is up and running 
![preview](./Images/threetier-9.png) 

## Web Server Configuration:

1) Install nvm on the machine using the below command
```
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash 
```
![preview](./Images/threetier-10.png)

2) Re login to the machine
3) Run the below commands to isntall nvm and npm
   ```
    nvm --version 
    cd /tmp/three-tier-example/web/
   ```
 ![preview](./Images/threetier-11.png)
4) Run the below commands to isntall nvm and npm
   ```
    nvm install 
    node --version
    npm --version
    npm install

   ```
![preview](./Images/threetier-12.png)

5) Run the below command to launch the application
```
npm run serve
```
![preview](./Images/threetier-13.png)

6) Access the web application using the below url :
```
http://<public IP of the servever>:8081
E.g. http://15.207.16.186:8081/

```
7) The application is up and running. you can vote and check the status
![preview](./Images/threetier-14.png)

