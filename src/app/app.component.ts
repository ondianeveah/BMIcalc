import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-bmi';
  Kilograms: number;
  Centimeters: number;
  answer: number;

  getbmivalue(){
    this.answer = this.Kilograms / Math.pow (this.Centimeters / 100, 2)
  }
}
