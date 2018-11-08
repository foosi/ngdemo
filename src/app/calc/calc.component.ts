import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  num1: number;

  num2: number;

  result: number;


  constructor() { }

  ngOnInit() {
  }


  add() {

    this.result = this.num1 + this.num2;

  }

  substract() {

    this.result = this.num1 - this.num2;

  }

  multiply() {

    this.result = this.num1 * this.num2;

  }

  divide() {

    this.result = this.num1 % this.num2;

  }

}
