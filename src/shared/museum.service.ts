import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MuseumService {
  constructor(private http: HttpClient) {}

  // get Objects
  getObjects() {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects`;
    return this.http.get(url).pipe(
      map((response: any) => {
        if (response.objectIDs) {
          return response;
        }
      })
    );
  }

  // get Object based upon Ids
  getObjectsData(id: any) {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        if (response) {
          return response;
        }
      })
    );
  }

  // get departments
  getDepartments() {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/departments`;
    return this.http.get(url).pipe(
      map((response: any) => {
        if (response) {
          return response.departments;
        }
      })
    );
  }

  // get Object data based upon Ids
  getObjectDataById(id: any) {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${id}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        if (response) {
          return response.objectIDs.slice(0, 10);
        }
      })
    );
  }
}
