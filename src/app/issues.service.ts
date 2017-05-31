import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IssuesService {

  constructor(private http: Http) { }

  getAllIssues() {

    return new Promise((resolve, reject) => {
      this.http.get('/api/issues')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
    
  }

  saveIssue(data) {

    return new Promise((resolve, reject) => {
        this.http.post('/api/issues', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
