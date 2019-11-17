import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestRequestService {

  constructor( private http: HttpClient) {

   }

  postEndpoints = {
    "tasks": "http://127.0.0.1:8000/tasks/",
    }

  getEndPoints = {
    "tasks": {
        endpoint: "http://127.0.0.1:8000/tasks/",
        urlparams: undefined
    },
  }

  deleteEndPoints = {
    "tasks": {
        endpoint: "http://127.0.0.1:8000/tasks/",
        urlparams: undefined
    },
    
  }

  putEndPoints = {
    "tasks": {
      endpoint: "http://127.0.0.1:8000/tasks/",
      urlparams: undefined
    }
  }

  patchEndPoints = {
    "tasks": {
      endpoint: "http://127.0.0.1:8000/tasks/",
      urlparams: undefined
    }
  }

  public postRequest(httpRequestHeaders:any, httpRequestData:any, httpEndPoint:any) {

   console.log("sending post request to: " + httpEndPoint + ": " + this.postEndpoints[httpEndPoint])

   console.log("composed request headers " + JSON.stringify(httpRequestHeaders))
   return this.http.post(this.postEndpoints[httpEndPoint],
   httpRequestData, httpRequestHeaders)
  }

  private endpoint: any;

  public getRequest(httpRequestHeaders:any, httpEndPoint:any, urlParam:any ) {

    if (urlParam != undefined) {
      this.endpoint = this.getEndPoints[httpEndPoint]["endpoint"] + "/" + urlParam
    } else {
      this.endpoint = this.getEndPoints[httpEndPoint]["endpoint"]
    }

    if (this.getEndPoints[httpEndPoint]["urlparams"]) {
      this.endpoint = this.endpoint + "/" + this.getEndPoints[httpEndPoint]["urlparams"]
    }

    console.log("sending get request to: " + httpEndPoint + ": " + this.endpoint)

    console.log("composed request headers " + JSON.stringify(httpRequestHeaders))
    return this.http.get(this.endpoint, httpRequestHeaders)
  }

  public deleteRequest(httpRequestHeaders:any, httpEndPoint:any, urlParam:any ) {

    if (urlParam != undefined) {
      this.endpoint = this.deleteEndPoints[httpEndPoint]["endpoint"] + urlParam + "/"
    } else {
      this.endpoint = this.deleteEndPoints[httpEndPoint]["endpoint"]
    }

    console.log("sending delete request to: " + httpEndPoint + ": " + this.endpoint)

    console.log("composed request headers " + JSON.stringify(httpRequestHeaders))
    return this.http.delete(this.endpoint, httpRequestHeaders)
  }

  public putRequest(httpRequestHeaders:any, httpRequestData:any, httpEndPoint:any, urlParam:any)  {

    if (urlParam != undefined) {
      this.endpoint = this.putEndPoints[httpEndPoint]["endpoint"] + "/" + urlParam + "/"
    } else {
      this.endpoint = this.putEndPoints[httpEndPoint]["endpoint"] + "/"
    }

    console.log("sending put request to: " + httpEndPoint + ": " + this.endpoint)

    console.log("composed request headers " + JSON.stringify(httpRequestHeaders))
    return this.http.put(this.endpoint, httpRequestData, httpRequestHeaders)
  }


  public patchRequest(httpRequestHeaders:any, httpRequestData:any, httpEndPoint:any, urlParam:any)  {

    if (urlParam != undefined) {
      this.endpoint = this.patchEndPoints[httpEndPoint]["endpoint"] + "/" + urlParam + "/"
    } else {
      this.endpoint = this.patchEndPoints[httpEndPoint]["endpoint"] + "/"
    }

    console.log("sending patch request to: " + httpEndPoint + ": " + this.endpoint)

    console.log("composed request headers " + JSON.stringify(httpRequestHeaders))
    return this.http.patch(this.endpoint, httpRequestData, httpRequestHeaders)
  }

}
