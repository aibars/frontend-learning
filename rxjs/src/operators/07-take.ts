import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numbers$ = of(1,2,3,4,5).pipe(tap(t => console.log(t)));

numbers$
.pipe(
  tap(t => console.log(t)),
  take(3)
)
.subscribe({
  next: (val) =>  console.log(val),
  complete: () => console.log('complete')
});