import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
  export class DataloadService {

    constructor(private http: HttpClient) { }

    LoadData(): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((posts) => {return posts; }))
    }

    private extractData(res: Response) {
      let body = res;
      return body;
    }

  }