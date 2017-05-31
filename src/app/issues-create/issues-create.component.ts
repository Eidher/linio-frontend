import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issues-create',
  templateUrl: './issues-create.component.html',
  styleUrls: ['./issues-create.component.css']
})
export class IssuesCreateComponent implements OnInit {

  constructor(private issuesService: IssuesService, private router: Router) { }

  issue = {}

  ngOnInit() {
  }

  saveIssue() {

    this.issuesService.saveIssue(this.issue).then((result) => {
      this.router.navigate(['/issues']);
    }, (err) => {
      console.log(err);
    });
  }

}
