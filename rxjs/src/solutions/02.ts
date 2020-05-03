import { from } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

const datos = [1, 2, 'foo', true, 3, 5, 6, 'bar', 7, 8, [], null];

from(datos).pipe(
  filter<any>(val => val && !isNaN(Number(val.toString()))),
  reduce((acc, val) => acc + val, 0)
).subscribe(console.log)
