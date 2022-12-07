import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { GalleryRoutes } from './gallery.routing';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    RouterModule.forChild(GalleryRoutes)
  ]
})
export class GalleryModule { }
