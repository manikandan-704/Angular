import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { DisplayCounter } from '../display-counter/display-counter';

@Component({
  selector: 'app-header',
  imports: [DisplayCounter],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  count = 0;

  buttonIncrement(){
    this.count++;
  }

  buttonDecrement(){
    this.count--;
  }
}
