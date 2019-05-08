import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nums-shower',
  templateUrl: './nums-shower.component.html',
  styleUrls: ['./nums-shower.component.css']
})
export class NumsShowerComponent implements OnInit {

  constructor() { }

  @Input() numberToShow: number;

  ngOnInit() {
  }

}
