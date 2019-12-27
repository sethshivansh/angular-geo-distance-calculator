import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public filtredCustomers = [];
  /* METHOD: getCustomers
    PARAMS: Event object JS core
    PURPOSE: To get the filtred Customers data from search Component (Child)
    CREATOR: @shivanshSeth
  */
  getCustomers(event){
    console.log("Inside App componenet", event);
    this.filtredCustomers = event ; // Binding Data coming from Search componenet
  }

}
