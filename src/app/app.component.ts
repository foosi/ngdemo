import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngdemo';

  // ngOnInit(): void {
  //   const scores: number[] = [100, 99, 98];

  //   _.remove(scores, 2);
  //   scores.forEach((score) => console.log(score));
  // }

}
