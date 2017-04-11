# Initial Setup Steps for Azure DevOps Lab with Node.js, Docker and VSTS

These are more detailed steps for the setup tasks with screenshots

## 1. Creating a new VSTS account / project
 * Choose a unique name for your account, make sure you choose git to manage your code:  
 ![vsts1](imgs/vsts1.png)
 * If you just created a new VSTS account, it will automatically create a project called "MyFirstProject" 
so you can use that


## 3. Make a note of your Azure subscription id
 * Log into the Azure portal [https://portal.azure.com](https://portal.azure.com)
 * Search for "subscriptions" (or just "sub") in the search bar  
 ![az-sub1](imgs/az-sub1.png)
 * Click on your subscription in the list  
 ![az-sub2](imgs/az-sub2.png)
 * In the 'Essentials' view your subscription ID will be shown along with a way to quickly copy it  
 ![az-sub3](imgs/az-sub3.png)
 

## Optional - Creating git credentials
 * If you are not using the git credential manager you will need git credentials. From your new account/project page click 'Generate Git credentials'  
 ![vsts2](imgs/vsts2.png)
