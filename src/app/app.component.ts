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
    event.sort(function(obj1, obj2) {
      // Ascending: by user_id of customers
      return obj1.user_id - obj2.user_id;
    });
    console.log("Inside App componenet", event);
    this.filtredCustomers = event ; // Binding Data coming from Search componenet
  }

}
