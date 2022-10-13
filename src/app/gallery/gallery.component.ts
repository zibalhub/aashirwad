import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyVideoComponent } from './my-video/my-video.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

 
  galleryImages = [
    {img: "assets/images/gal1.jpg", class:"active"},
    {img: "assets/images/gal2.jpg", class:"notactive"},
    {img: "assets/images/gal3.jpg", class:"notactive"},
    {img: "assets/images/gal4.jpg", class:"notactive"},
    {img: "assets/images/gal5.jpg", class:"notactive"},
    {img: "assets/images/gal6.jpg", class:"notactive"},
    {img: "assets/images/gal7.jpg", class:"notactive"},
    {img: "assets/images/gal8.jpg", class:"notactive"},
    {img: "assets/images/gal9.jpg", class:"notactive"},
    {img: "assets/images/gal10.jpg", class:"notactive"},
    {img: "assets/images/gal11.jpg", class:"notactive"},
    {img: "assets/images/gal12.jpg", class:"notactive"},
    {img: "assets/images/gal13.jpg", class:"notactive"},
    {img: "assets/images/gal14.jpg", class:"notactive"},
    {img: "assets/images/gal15.jpg", class:"notactive"},
    {img: "assets/images/gal16.jpg", class:"notactive"},
    {img: "assets/images/gal17.jpg", class:"notactive"},
    {img: "assets/images/gal18.jpg", class:"notactive"},
    {img: "assets/images/gal19.jpg", class:"notactive"},
    {img: "assets/images/gal20.jpg", class:"notactive"},
    {img: "assets/images/gal21.jpg", class:"notactive"},
    {img: "assets/images/gal22.jpg", class:"notactive"},
    {img: "assets/images/gal23.jpg", class:"notactive"},
    {img: "assets/images/gal24.jpg", class:"notactive"},
    {img: "assets/images/gal25.jpg", class:"notactive"},
    {img: "assets/images/gal26.jpg", class:"notactive"},
    {img: "assets/images/gal27.jpg", class:"notactive"},
    {img: "assets/images/gal28.jpg", class:"notactive"},
    {img: "assets/images/gal29.jpg", class:"notactive"},
    {img: "assets/images/gal30.jpg", class:"notactive"},
    {img: "assets/images/gal31.jpg", class:"notactive"},
    {img: "assets/images/gal32.jpg", class:"notactive"},
    {img: "assets/images/gal33.jpg", class:"notactive"},
    {img: "assets/images/gal34.jpg", class:"notactive"},
    {img: "assets/images/gal35.jpg", class:"notactive"},
    {img: "assets/images/gal36.jpg", class:"notactive"},
    {img: "assets/images/gal37.jpg", class:"notactive"},
    {img: "assets/images/gal38.jpg", class:"notactive"},
    {img: "assets/images/gal39.jpg", class:"notactive"},
    {img: "assets/images/gal40.jpg", class:"notactive"},
    {img: "assets/images/n1.JPG", class:"notactive"},
    {img: "assets/images/n2.JPG", class:"notactive"},
    {img: "assets/images/n3.JPG", class:"notactive"},
    {img: "assets/images/n4.JPG", class:"notactive"},
    {img: "assets/images/n5.JPG", class:"notactive"},
    {img: "assets/images/n6.JPG", class:"notactive"},
    {img: "assets/images/n7.JPG", class:"notactive"},
    {img: "assets/images/n8.JPG", class:"notactive"},
    {img: "assets/images/n9.JPG", class:"notactive"},
    {img: "assets/images/n10.JPG", class:"notactive"},
    {img: "assets/images/n11.JPG", class:"notactive"},
    {img: "assets/images/n12.JPG", class:"notactive"},
    {img: "assets/images/n13.JPG", class:"notactive"},
    {img: "assets/images/n14.JPG", class:"notactive"},
    {img: "assets/images/n15.JPG", class:"notactive"},
    {img: "assets/images/n16.JPG", class:"notactive"},
    {img: "assets/images/n17.JPG", class:"notactive"},
    {img: "assets/images/n18.JPG", class:"notactive"},
    {img: "assets/images/n19.JPG", class:"notactive"},
    {img: "assets/images/n20.JPG", class:"notactive"},
    {img: "assets/images/n21.JPG", class:"notactive"},
    {img: "assets/images/n22.JPG", class:"notactive"},
    {img: "assets/images/n23.JPG", class:"notactive"},
    {img: "assets/images/n24.JPG", class:"notactive"},
    {img: "assets/images/n25.JPG", class:"notactive"},
    {img: "assets/images/n26.JPG", class:"notactive"},
    {img: "assets/images/n27.JPG", class:"notactive"},
    {img: "assets/images/n28.JPG", class:"notactive"},
    {img: "assets/images/n29.JPG", class:"notactive"},
  ]
  galleryVideo = [
    {img: "assets/images/11.jpg", videourl:"assets/images/1.MP4.mp4"},
    {img: "assets/images/22.jpg", videourl:"../assets/images/2.MP4.mp4"},
    {img: "assets/images/33.JPG", videourl:"../assets/images/3.MP4.mp4"},
    {img: "assets/images/44.jpg", videourl:"assets/images/4.MP4.mp4"},
    {img: "assets/images/55.jpg", videourl:"../assets/images/5.MP4.mp4"},
    {img: "assets/images/66.jpg", videourl:"../assets/images/6.MP4.mp4"},
    {img: "assets/images/77.jpg", videourl:"assets/images/7.MP4.mp4"},
    {img: "assets/images/88.jpg", videourl:"../assets/images/8.MP4.mp4"},
    {img: "assets/images/99.jpg", videourl:"../assets/images/9.MP4.mp4"},
  ]
  constructor(private dialog:MatDialog) { }
  p:number=1
  ngOnInit(): void {
  
  }
  videoplay(url:any){
    let dialogRef = this.dialog.open(MyVideoComponent, {
      width: '700px',
      panelClass: 'delete-dialog',
      data: {view: url}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }
  largeimg:any='assets/images/gal1.jpg'
  imgclick(url:any){
    this.galleryImages.forEach((ele:any)=>{debugger
       ele.img==url?ele['class']='active':ele['class']='notactive'})
this.largeimg=url
  }

}
