const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const customers = require('../server/controller/customers.ts');

const request = require('request');
const path = require('path');
const appRoot = require('app-root-path');
const PORT = 8080;


const app = express();
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
var corsOptions = {
	origin: '*',
	//optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
	console.log('Endpoint passthrough service started');
});

app.get('/api/searchCustomers', (req, res)=>{
customers.search_customers(req, res);
});


// var fs = require('fs');
// var usrData =[];
// fs.readFile('data/Customers_Assignment_Coding_Challenge.txt', 'utf8', function(err, contents) {
// 	// contents.replace('\r', '')
// 	// contents.replace('\n', ',')
// 	// console.log(contents);
// 	// // console.log(JSON.stringify(contents.name));
// 	// console.log(contents.replace(/(\r\n|\n|\r)/gm,","))
// 	// console.log(typeof(contents));

// 	// var obj = JSON.parse(text, function (key, value) {
// 	// 	if (key == "birth") {
// 	// 	  return new Date(value);
// 	// 	} else {
// 	// 	  return value;
// 	// 	}
// 	//   });
// 	usrData.push(contents.replace(/(\r\n|\n|\r)/gm,","))
// 	// console.log(usrData);

// 	var DBL_Lat = 53.339428; 
// 	var DBL_Long = -6.257664;
// 	var distance = calculate_distance(DBL_Lat,DBL_Long,52.986375,-6.043701, 'K' );
// 	// console.log('is at distance of ' + distance + 'Km from Dublin.');
// });

// fs.readFileSync('data/Customers_Assignment_Coding_Challenge.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
// 	// console.log(line);
// 	usrData.push(line);
// 	// console.log(usrData);
// 	usrData.forEach(function(data,index){
// 		// usrData[index] = data ;
// 		// console.log(JSON.parse(data));
// 	var lineData = JSON.parse(data);
// 	var DBL_Lat = 53.339428; 
// 	var DBL_Long = -6.257664;
// 	var distance = calculate_distance(DBL_Lat,DBL_Long,lineData.latitude, lineData.longitude, 'K' );
// 	console.log(index+1 +')' + ' user: '+ "  " + lineData.name +'  is at distance of ' + distance + '  Km from Dublin.');
// 	})
//   })


// function calculate_distance(lat1, lon1, lat2, lon2, unit) {
// 	if ((lat1 == lat2) && (lon1 == lon2)) {
// 		return 0;
// 	}
// 	else {
// 		// converting degrees into radian ( radian = pi * theetha/180)
// 		var radlat1 = Math.PI * lat1/180;
// 		var radlat2 = Math.PI * lat2/180;
// 		var theta = lon1-lon2;
// 		var radtheta = Math.PI * theta/180;
// 		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
// 		if (dist > 1) {
// 			dist = 1;
// 		}
// 		dist = Math.acos(dist);
// 		dist = dist * 180/Math.PI;
// 		dist = dist * 60 * 1.1515;
// 		if (unit=="K") { dist = dist * 1.609344 }
// 		if (unit=="N") { dist = dist * 0.8684 }
// 		return dist;
// 	}
// }
app.use(express.static('dist'));
app.get('*', (req, res) => {
	res.sendFile(path.join(appRoot.path, 'dist/index.html'));
});


