import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
}
const numbers$ = of<number | string>(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1).pipe(
  distinct()
);

numbers$.subscribe(observer);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: 'megaman' },
  { nombre: 'x' },
  { nombre: 'Zero' },
  { nombre: 'megaman' },
  { nombre: 'Zero' },
];

from(personajes)
  .pipe(
    distinct(p => p.nombre)
  )
  .subscribe(console.log);