import { Component, OnInit, OnChanges } from '@angular/core';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit,  OnChanges {

  issues: any = []

  constructor(private issuesService: IssuesService) { }

  ngOnInit() {
    this.loadIssues();
  }

  ngOnChanges() {
    this.loadIssues();
  }

  loadIssues() {
    this.issuesService.getAllIssues()
    .then(res => {
      this.issues = res;
    }, err => {
      console.log(err);
    });
  }

}
