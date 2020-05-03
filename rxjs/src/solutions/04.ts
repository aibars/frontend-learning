import { interval, Subject } from 'rxjs';
import { take, map, takeUntil, takeWhile } from 'rxjs/operators';


const inicio = 7;
const countdown$ = interval(700).pipe(
  // Usar los operadores necesarios
  // para realizar la cuenta regresiva
  map(val => inicio - val),
  takeWhile((val, idx) => val >= 0)
);


// No tocar esta línea ==================
countdown$.subscribe(console.log); // =
// ======================================
