import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyVideoComponent } from './my-video/my-video.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  }
];

@NgModule({
  declarations: [GalleryComponent, MyVideoComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    MatDialogModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
