import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carsouel',
  templateUrl: './carsouel.component.html',
  styleUrls: ['./carsouel.component.css']
})
export class CarsouelComponent implements OnInit {


items: any = [
  {img:    'https://image.shutterstock.com/image-photo/hotel-reservation-blank-ring-on-260nw-1566785659.jpg',
  title: 'Find and compare hotel deals.',
  desc:' Search cheap hotels by destination ',
  description:'Can I really save on hotels near me and accommodation in other popular destinations by using',
  

},
{img: 'https://image.shutterstock.com/image-photo/hotel-reservation-blank-ring-on-260nw-1566785659.jpg',

title: 'Find and compare hotel deals.',
desc:' active',
description:'Can I really save on hotels near me and accommodation in other popular destinations by using',

},
{img:       'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fus%2Fthe-empire.en-gb.html&psig=AOvVaw2wi-Pgnc-Olk4hrnUHibRs&ust=1644518147176000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCl5tWh8_UCFQAAAAAdAAAAABAV',

title: 'Find and compare hotel deals.',
desc:' Search cheap hotels by destination ',
description:'Booking! Powered by 100% wind energy',

}
  
];
  constructor() { }

  ngOnInit(): void {
  }

}
