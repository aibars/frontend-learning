import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Detener timer';
document.querySelector('body').append(button);

const counter$ = interval(1000);

//const clickBtn$ = fromEvent<MouseEvent>(button, 'click');
// should emit a value after two clicks and then stop the timer
const clickBtn$ = fromEvent<MouseEvent>(button, 'click').pipe(
  tap(() => console.log('before skip')),
  skip(1),
  tap(() => console.log('after skip')),
);

counter$
  .pipe(
    takeUntil(clickBtn$)
  )
  .subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
  });
