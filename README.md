# Admin Page in C#

This is an admin page for an ecommerce website. It has core CRUD functionalities:

### CREATE
![](work/create.gif)

### READ
![](work/read.gif)

### UPDATE
![](work/update.gif)

### DELETE
![](work/delete.gif)

Server and API created with C# and ASP.NET Core
Front End created with React

## USAGE

In order to use this app you will have to install C# and .NET Core. You will also have to create a .env at the root of your folder, with this structure:

```
PORT = 3306
DB_PASSWORD = password
DB_DATABASE = database
DB_HOST = localhost
DB_USER = user
```
In your terminal you will have to navigate to the directory and run this command:

```
dotnet run
```
You can then find this app running in localhost:5000!

## THE DOCKER OF IT ALL

This was the first time I ever used Docker to dockerize an app and it was a tad confusing. Luckily I found some resources to help me with the process:

* [How YOU can Dockerize a .Net Core app](https://softchris.github.io/pages/dotnet-dockerize.html)
* [Deploy DotNet Core API Docker Container with MySQL on Heroku](https://medium.com/faun/deploy-dotnet-core-api-docker-container-with-mysql-on-heroku-ed387eab4222)
* [Creating an ASP.Net Core app with a React frontend and Docker hosting](https://hjerpbakk.com/blog/2018/06/25/aspnet-react-and-docker)
* [Build a Simple .NET Core App on Docker](https://developer.okta.com/blog/2019/09/18/build-a-simple-dotnet-core-app-in-docker)
* [Tutorial: Containerize a .NET Core app](https://docs.microsoft.com/en-us/dotnet/core/docker/build-container)
