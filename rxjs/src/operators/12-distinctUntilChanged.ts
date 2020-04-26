import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: 'Megaman' },
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'X' },
  { nombre: 'Zero' },
  { nombre: 'Megaman' },
  { nombre: 'Zero' },
];

from(personajes)
  .pipe(
    distinctUntilChanged((previous, current) => previous.nombre === current.nombre)
  )
  .subscribe(console.log);