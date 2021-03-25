import { Component, OnInit } from '@angular/core';
interface slot {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {
  foods: slot[] = [
    {value: 'Cabine', viewValue: 'Cabine'},
    {value: 'Room', viewValue: 'Room'},
    {value: 'Meeting-room', viewValue: 'Meeting room'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
