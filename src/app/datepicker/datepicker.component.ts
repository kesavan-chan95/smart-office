import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  // minDate = new Date();
  // maxDate = new Date(2019, 3, 10);
  constructor() { }

  ngOnInit(): void {
  }

}
