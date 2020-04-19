import { range, asyncScheduler } from 'rxjs';

/**
 * Eventos del DOM 
 */
const src1$ = range(1, 5, asyncScheduler);


const observer = {
  next: next => console.log('next', next),
};

console.log('inicio');

src1$.subscribe(console.log);

console.log('fin');
