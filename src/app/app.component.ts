import { Component } from '@angular/core';

import * as _ from 'lodash';
import { HttpXsrfCookieExtractor } from '@angular/common/http/src/xsrf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  title = 'ngdemo';

  add(a, b) {
    return a + b;
  }

  evalStringExpression(expression: string, argNames: string[]) {
    try {
      return Function(...argNames, `return ${expression};`) as any;
    } catch (error) {
      console.error(error);
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    const scores: number[] = [100, 99, 98, 97];

    _.remove(scores, 2);
    scores.forEach((score) => console.log(score));

    console.log('call add function ' + this.add(0.99, 99999));

    console.log('call eval ' + this.evalStringExpression('1==1', ['model', 'formState']));

    const xx = this.evalStringExpression('1==1', ['model', 'formState']);

    console.log('call real eval ' + xx(10, 20));

  }


}
