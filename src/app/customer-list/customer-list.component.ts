import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input()
  customerData: any;

  constructor() { }

  ngOnInit() {
  
  }

  clearTable(){
    this.customerData = [];
  }

  commingSoon(){
    alert('New Feature ! Coming Soon..')
  }
 

}
