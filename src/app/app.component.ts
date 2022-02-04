import { Component } from '@angular/core';
import { BComponent } from './b/b.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private b:BComponent){}

  viewGames(){
    console.log(this.b.viewGames);
  }
}


