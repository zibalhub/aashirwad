import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  }
];

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    RouterModule.forChild(routes),
    NgxPaginationModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
