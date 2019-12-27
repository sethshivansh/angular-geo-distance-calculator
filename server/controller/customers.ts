var fs = require('fs');

var Dublin_Lat = 53.339428;  // Refrence Latitude point - Origin
var Dublin_Long = -6.257664; // Refrence Longitude point - Origin
var radiusDistanceRange = 100; // distance radius range to be search customers in KM


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
        // converting degrees into radian ( radian = pi * theetha/180)
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;

        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta); // Haversine formula : for more details visit (https://en.wikipedia.org/wiki/Haversine_formula) 
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") { dist = dist * 1.609344 }
        if (unit == "N") { dist = dist * 0.8684 }
        return dist;
    }
}

/* METHOD: readFileandFilter
PARAMS: Req & res Object
PURPOSE: read Local File Data and filter data
CREATOR: @shivanshSeth
*/
function readFileandFilter(req, res) {
    let matched_customers = []; // this local scoped variable will hold the customers who matched the criteria
    fs.readFileSync('data/Customers_Assignment_Coding_Challenge.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
        var lineData = JSON.parse(line);
        // filterData(radiusDistanceRange, lineData); // Calling Filter Method for seprating all matched records.
        var distance = calculate_distance(Dublin_Lat, Dublin_Long, lineData.latitude, lineData.longitude, 'K');
        // check if custumer calculated distance is less than 100 KM or Not.
        if (distance < radiusDistanceRange) {
            // Creating JSON structure for sending to End Users
            var custData = {
                'user_id': lineData.user_id,
                'name': lineData.name,
                'latitude': lineData.latitude,
                'longitude': lineData.longitude,
                'distance': Math.round(distance)
            }

            matched_customers.push(custData); // Pushing into Matched Users who full filing the criteria i.e with in 100KM
        }
    })
    res.send(matched_customers);
}

// list of all Matched Customers.
exports.search_customers = function (req, res) {
    readFileandFilter(req, res); // Calling abstracted methods for calculations.
};