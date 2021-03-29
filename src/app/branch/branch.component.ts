import { Component, OnInit } from '@angular/core';
interface branch {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  foods: branch[] = [
    {value: 'demo1', viewValue: 'demo1'},
    {value: 'demo2', viewValue: 'demo2'},
    {value: 'demo3', viewValue: 'demo3'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
