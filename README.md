# angular-geo-distance-calculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

This Algorithm calculates the distance between two points (given the latitude/longitude of those points). 

### Definitions:

South latitudes are negative, east longitudes are positive.

Passed to function: 
        lat1, lon1 = Latitude and Longitude of point 1/ origin (in decimal degrees).
        
        lat2, lon2 = Latitude and Longitude of point 2/ destination (in decimal degrees).
        
        unit = the unit you desire for results.

where: 

        'M' is statute miles (default).
        
        'K' is kilometers.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Steps to run the Application

Please follow the below steps to run project.

### Step-1 : 
Clone or Download the (angular-geo-distance-calculator) repository
### Step-2 : 
Install all project dependencies by Run `npm install` commaon in root of your project. This will install all the npm dependencies.
### Step-3 : 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Steps to run the Application API server

Once your UI application is running sucessfully , we have to start our API server ( node.js server), which will listion to all the requests coming from our UI end.
Follow the below steps to run your application API server.

### Step-1 : 
Go to the `server` directory.

    `work-space > angular-geo-distance-calculator > cd server`
### Step-2 : 
Run command `node server.ts`.
  
    `work-space > angular-geo-distance-calculator > server  > node server.ts`
    
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
