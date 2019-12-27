import { BrowserModule} from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchComponent } from './search/search.component';

// SERVICES - USED in Application 
import { EndpointApiService } from './services/endpoint-api.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [EndpointApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
