import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryImages: any = [];

  constructor() { }

  ngOnInit(): void {
    this.galleryImages = [
      {img: "assets/images/gal1.jpg"},
      {img: "assets/images/gal2.jpg"},
      {img: "assets/images/gal3.jpg"},
      {img: "assets/images/gal4.jpg"},
      {img: "assets/images/gal5.jpg"},
      {img: "assets/images/gal6.jpg"},
      {img: "assets/images/gal7.jpg"},
      {img: "assets/images/gal8.jpg"},
      {img: "assets/images/gal9.jpg"},
      {img: "assets/images/gal10.jpg"}
    ]
  }

}
