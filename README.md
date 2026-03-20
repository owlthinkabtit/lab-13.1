# Lab-13.1: Connecting a Database
**Author:** Jameka Haggins 
---

## Reflection Questions
1. Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?
2. What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?
3. If your application failed to connect, what are the first few steps you would take to debug the issue?
---
Whitelisting IP Addresses is like having a VIP list for a club. If you allow 0.0.0.0/0, anyone in the world who finds your password can try to enter your database. In production, you only whitelist your own server's IP so that only your app can talk to the data.

The dotenv package's job is to house the password for us so that we don't have to have it in the source code. But you have to make sure that you add it into a .gitignore file, this way, if you share your code on GitHub, people can see the logic but they can't see your private login details. 
