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
      {img: "assets/images/banner1.jpg"},
      {img: "assets/images/banner2.jpg"}
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
