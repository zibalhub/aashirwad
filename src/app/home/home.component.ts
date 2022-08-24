import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides: any = [];
  slideConfig: any;

  constructor() { }

  ngOnInit(): void {
    this.slides = [
      {img: "assets/images/slider.jpg", slideId: '0'},
      {img: "assets/images/slider0.jpg", slideId: '1'},
      {img: "assets/images/slider00.jpg", slideId: '2'},
      {img: "assets/images/slider1.jpg", slideId: '3'},
      {img: "assets/images/slider2.jpg", slideId: '4'},
      {img: "assets/images/slider3.jpg", slideId: '5'},
      {img: "assets/images/slider4.jpg", slideId: '6'},
      {img: "assets/images/slider5.jpg", slideId: '7'},
      {img: "assets/images/slider6.jpg", slideId: '8'},
      {img: "assets/images/slider7.jpg", slideId: '9'}
    ];
    this.slideConfig = {"slidesToShow": 1, "dots": true, "infinite": true};
  }
   
  slickInit() {
    console.log('slick initialized');
  }
     
  breakpoint() {
    console.log('breakpoint');
  }
     
  afterChange() {
    console.log('afterChange');
  }
     
  beforeChange() {
    console.log('beforeChange');
  }
}
