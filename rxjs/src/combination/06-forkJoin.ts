import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(
  take(3)
);
const letters$ = of('a', 'b', 'c').pipe(
  delay(3000)
);

// forkJoin(numbers$, interval$, letters$).subscribe(
//   resp => { 
//     console.log('numbers: ', resp[0]);
//     console.log('intervalo: ', resp[1]);
//     console.log('letras: ', resp[2]);
//  }
// );

forkJoin({
  num: numbers$,
  int: interval$,
  let: letters$
}).subscribe(
  resp => {
    console.log(resp);
  }
);