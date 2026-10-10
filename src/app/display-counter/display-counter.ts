import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  imports: [],
  templateUrl: './display-counter.html',
  styleUrl: './display-counter.css',
})
export class DisplayCounter {
  @Input() counter! : number
}
