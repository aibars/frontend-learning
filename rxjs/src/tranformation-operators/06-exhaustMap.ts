import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe(
  take(3)
);

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  exhaustMap((a) => interval$)
).subscribe(console.log);