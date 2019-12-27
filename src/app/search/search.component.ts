import { Component, OnInit, Output, Input, EventEmitter  } from '@angular/core';
import { EndpointApiService } from "../services/endpoint-api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  sendCustomerDataToApp = new EventEmitter();

  matched_customers = []; // This will hold the all matched customers records from API

  constructor( private endpointApiService: EndpointApiService) { }

  ngOnInit() {
  }

  /* METHOD: getCustomers
   PARAMS: NA
   PURPOSE: To get the filtred Customers data from API call
   CREATOR: @shivanshSeth
 */
  getCustomers() {
    var URL = "api/searchCustomers";
    var params = '';
    // API call to get customer data
    this.endpointApiService.executeGetService(URL, params).subscribe(
      data => {
        this.matched_customers = data ;
        this.sendCustomerDataToApp.emit(this.matched_customers); // Sending Data to project details component
      },
      err => {
        
      }
    );
  }

}
