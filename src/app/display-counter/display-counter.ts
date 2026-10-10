import { Component, EventEmitter,input , Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  imports: [],
  templateUrl: './display-counter.html',
  styleUrl: './display-counter.css',
})
export class DisplayCounter {
  // @Input() counter! : number
  counter = input<number>(0);

  //  @Output() sendData = new EventEmitter<string>();
  sendData= output<string>();

  buttonClick() {
    this.sendData.emit('Data from child');
  }
}
