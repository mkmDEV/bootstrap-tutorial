import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { CategoryWidgetComponent } from './components/category-widget/category-widget.component';
import { SideWidgetComponent } from './components/side-widget/side-widget.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    BlogPostComponent,
    SearchWidgetComponent,
    CategoryWidgetComponent,
    SideWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
