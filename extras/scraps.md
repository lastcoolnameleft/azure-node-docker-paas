and then click into the Container Registry as we'll need to get some information. The blade in the portal will open and from there click 'Access keys'. Three bits of info we need:  
* Login server
* Username (Note: this is always the same as the name of the registry)
* Password (pick any one of the two)
Copy and paste these into a scratch pad file, as we'll need them in a moment.
<details>
  <summary>View screenshots of this step (Click to expand/collapse)</summary>

  ![res-group](imgs/res-group.png)
  ![acr-keys](imgs/acr-keys.png)
</details>

 



## 5. VSTS Build Process
First we'll add a connection to the Docker registry we created, using the information we previously gathered:  
* Click the cog on the menu bar and go into 'Services'
* Click 'New Service Endpoint' and pick 'Docker Registry' - 
  * *Connection name:* Pick any sensible name
  * *Docker Registry:* URL pointing at your new registry, e.g. `https://{registry-login-server}` note the server ends in `.azurecr.io`
  * *Docker ID:* The username for your registry (Note: this is always the same as the name of the registry)
  * *Password:* The password you made a note of
  
<details>
  <summary>View screenshot of this step (Click to expand/collapse)</summary>

  ![vsts-acr](imgs/vsts-acr.png)  
</details> 