import { fromEvent } from 'rxjs';
import { take, first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    tap<MouseEvent>(console.log),
    map(({ clientX, clientY }) => ({ clientY, clientX })),
    first(x => x.clientY >= 150)
  )
  .subscribe({
    next: val => console.log('valor', val),
    complete: () => console.log('complete')
  });