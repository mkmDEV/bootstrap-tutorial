import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { CategoryWidgetComponent } from './components/category-widget/category-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    BlogPostComponent,
    SearchWidgetComponent,
    CategoryWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
