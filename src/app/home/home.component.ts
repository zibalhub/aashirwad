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
      {img: "assets/images/slider.jpg"},
      {img: "assets/images/slider00.jpg"},
      {img: "assets/images/slider1.jpg"},
      {img: "assets/images/slider2.jpg"},
      {img: "assets/images/slider3.jpg"},
      {img: "assets/images/slider4.jpg"},
      {img: "assets/images/slider5.jpg"},
      {img: "assets/images/slider6.jpg"},
      {img: "assets/images/slider7.jpg"}
    ];

    this.slideConfig = {
      slidesToShow: 1, 
      dots: true, 
      infinite: true,
      mobileFirst: true,
      fade: true,
      cssEase: 'linear',
      autoplay: true, 
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            mobileFirst: true,
            dots: true,
            fade: true,
            autoplay: true, 
            autoplaySpeed: 2000,
            cssEase: 'linear'
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            mobileFirst: true,
            fade: true,
            dots: true,
            autoplay: true, 
            autoplaySpeed: 2000,
            cssEase: 'linear'
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            mobileFirst: true,
            fade: true,
            dots: true,
            autoplay: true, 
            autoplaySpeed: 2000,
            cssEase: 'linear'
          }
        }
      ]
    };
  }
}
