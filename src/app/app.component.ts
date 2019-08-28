import { Component } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrap-tutorial';


  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    titleService.setTitle('Blog Post - Start Bootstrap Template');
    meta.updateTag({name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'});
    meta.addTag({name: 'description', content: 'My first Angular8 project with Bootstrap4'}, true);
    meta.addTag({name: 'author', content: 'MARSI, Kristóf Mátyás'}, true);
  }
}
