import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dean',
  templateUrl: './dean.component.html',
  styleUrls: ['./dean.component.css']
})
export class DeanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deans:any[] = [
    {code: 'dean001', name:'abc', salary:6000, dept:'Computer-science'},
    {code: 'dean002', name:'xyz', salary:7000, dept:'IT'},
    {code: 'dean003', name:'def', salary:8000, dept:'Mechnical'},
    {code: 'dean004', name:'hij', salary:9000, dept:'Civil'}
  ];

}
