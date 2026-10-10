import { Component, signal } from '@angular/core';
import { Main } from './main/main';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  // const name = signal("");

}
