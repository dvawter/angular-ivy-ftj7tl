import { Component, VERSION } from '@angular/core';
import { of, from, generate } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { IEspAppl, IEspApplGen } from './espappl';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 3, 6, 8).subscribe(console.log);

    from([20, 15, 10, 5])
      .pipe(
        tap(item => console.log(`emitted item .... ${item}`)),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if (item === 0) {
            throw new Error('zero detected');
          }
          return item;
        }),
        take(3)
      )
      .subscribe(
        item => console.log(`resulting item .. ${item}`),
        err => console.log(`error occured ${err}`),
        () => console.log('complete')
      );
    var espAppls: IEspAppl[] = [
      {
        name: 'EB2S1014',
        generations: [
          {
            name: 'EB2S1014',
            generation: 25,
            created: new Date()
          },
          {
            name: 'EB2S1014',
            generation: 24,
            created: new Date()
          }
        ]
      },
      {
        name: 'NZDSAN01',
        generations: [
          {
            name: 'NZDSAN01',
            generation: 75,
            created: new Date()
          },
          {
            name: 'NZDSAN01',
            generation: 74,
            created: new Date()
          }
        ]
      }
    ];
  }
}
