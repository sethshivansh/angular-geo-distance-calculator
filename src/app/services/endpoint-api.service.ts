import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EndpointApiService {
  private host;
  public static APIPORT = "8080";
  private activeCalls: number = 0;
  private spinnerColor: string = 'blue';
  constructor(private http: HttpClient) {
    //switch endpoint target during local development
    if (window.location.hostname.indexOf("localhost") > -1) {
      this.host = window.location.protocol + '//' + window.location.hostname + ':' + EndpointApiService.APIPORT;
    } else {
      this.host = window.location.origin;
    }
  };

  executeGetService(url: string, params?: string, important?: boolean): Observable<any> {
    if (important) this.activeCalls++;
    let call: Observable<any>;
    let trackedCall: Observable<any> = new Observable((observer) => {
      if (params) {
        call = this.http.get(this.host + '/' + url + "&" + params);
      } else {
        call = this.http.get(this.host + '/' +  url);
      }
      call.subscribe(
        data => {
          if (important) this.activeCalls--;
          observer.next(data);
        },
        err => {
          if (important) this.activeCalls--;
          observer.error(err);
        },
        () => observer.complete()
      );
    });
    return trackedCall;
  }

}