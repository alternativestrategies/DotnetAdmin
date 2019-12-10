FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS builder
# this is our working directory
WORKDIR /src

# install node in order to run react
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

# restore NuGet packages and copy project file
COPY *.csproj .
RUN dotnet restore

COPY . .

# publish app
RUN dotnet publish "./products.csproj" --output "./dist" --configuration Release --no-restore

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS runtime
WORKDIR /app
COPY --from=builder /src/dist .
EXPOSE 80
EXPOSE 443
#this is the command for heroku
CMD ASPNETCORE_URLS=http://*:$PORT dotnet products.dll
# ENTRYPOINT ["dotnet","products.dll"]