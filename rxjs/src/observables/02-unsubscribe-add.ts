import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: valor => console.log('Valor:', valor),
  error: error => console.warn('Error:', error),
  complete: () => console.info('Completado'),
};

const intervalo$ = new Observable(subscriber => {
  let i = 1;
  setInterval(
    () => {
      subscriber.next(i);
      i++;
    }
    , 1000);
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
  subs1.unsubscribe();

  console.log('completed timeout');

}, 6000);