import { of, from } from 'rxjs';

const observer = {
  next: val => console.log(val),
  complete: () => console.log('complete')
};

//const source$ = of([1, 2, 3, 4, 5]);
const source$ = from(fetch('https://api.github.com/users/aibars'));


const generador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const iterable = generador();

for (let id of iterable) {
  console.log(id);

}


from(iterable).subscribe(observer);

// source$.subscribe(async (resp) => {
//   const data = await resp.json();
//   console.log(data);
// });
//source$.subscribe(observer);