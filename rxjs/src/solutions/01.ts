import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

const names$ = from(nombres);

names$.pipe(
    map(capitalizar)
).subscribe(console.log);