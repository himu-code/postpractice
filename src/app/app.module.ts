import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpModule } from '@angular/http';
import { PostService } from './post.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    PostViewComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component :HomeComponent},
      { path:'post', component : PostComponent},
      { path:'post/:pid', component : PostViewComponent},
      { path:'gallery', component: GalleryComponent},
      { path: '**', component :NoPageFoundComponent}
    ])
  ],
  providers: [ PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
