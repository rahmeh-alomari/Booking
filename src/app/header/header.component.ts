import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tilte ='Booking'
   items: any = [
    {src: '#Home', title: 'Home'},
    {src: '#Domains', title: 'Domains'},
    {src: '#Contact', title: 'Contact'},
    
];
  constructor() { }

  ngOnInit(): void {
  }

}
