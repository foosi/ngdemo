import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngdemo';

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    const scores: number[] = [100, 99, 98, 97];

    _.remove(scores, 2);
    scores.forEach((score) => console.log(score));
  }

}
