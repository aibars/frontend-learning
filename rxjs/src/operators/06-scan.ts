import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalAcum = (acc, curr) => acc + curr;

// Reduce 
from(numbers)
  .pipe(
    reduce(totalAcum, 0)
  )
  .subscribe(console.log);

// Scan 
from(numbers)
  .pipe(
    scan(totalAcum, 0)
  )
  .subscribe(console.log);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}
const user: Usuario[] = [
  { id: 'aibars', autenticado: false, token: null },
  { id: 'aibars', autenticado: true, token: 'ABC' },
  { id: 'aibars', autenticado: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
  scan<Usuario>((acc, curr) => {
    return { ...acc, ...curr }
  }, { edad: 29 })
);

const id$ = state$.pipe(
  map(state => state.id)
);

id$.subscribe(console.log);