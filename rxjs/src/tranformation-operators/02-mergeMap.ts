import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

const letters$ = of('a', 'b', 'c');

letters$.pipe(
  mergeMap(l => interval(1000).pipe(
    map(i => l + i),
    take(3)
  ))
)
// .subscribe({
//   next: val => console.log('next:', val),
//   complete: () => console.log('complete')
// });

const mousedown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

// count time with mouse click pressed
mousedown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseUp$)
  ))
).subscribe(console.log);