# Searching Algorithm

This Algorithm calculates the distance(air distance) between two points (given the latitude/longitude of those points).

### Definitions:

South latitudes are negative, east longitudes are positive.

Passed to function:

    lat1, lon1 = Latitude and Longitude of point 1 / Origin (in decimal degrees)
    lat2, lon2 = Latitude and Longitude of point 2 / Destination (in decimal degrees)  
    unit = the unit you desire for results                           
        where: 'M' is statute miles (default)
       'K' is kilometers , 'N'  is for Nautical miles.

## Algorithm Code
    /* METHOD: calculate_distance
    PARAMS: lat1 : Origin Latitude, lon1 : Origin Longitude, lat2 : Destination Latitude, lon2: Destination Longitude, unit: ('K)
    PURPOSE: Algorithm to calculate te distance between two points
    CREATOR: @shivanshSeth
    Refrences : Haversine formula : for more details visit (https://en.wikipedia.org/wiki/Haversine_formula) 
    */

    function calculate_distance(lat1, lon1, lat2, lon2, unit) {
      if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
      }
      else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        if (unit == "M") { dist = dist * 0.621371 }
        return dist;
      }
    }
