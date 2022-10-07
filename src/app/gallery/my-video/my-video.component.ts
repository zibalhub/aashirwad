import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-my-video',
  templateUrl: './my-video.component.html',
  styleUrls: ['./my-video.component.scss']
})
export class MyVideoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,) {console.log(dialogData) }

  ngOnInit(): void {
  }

}
