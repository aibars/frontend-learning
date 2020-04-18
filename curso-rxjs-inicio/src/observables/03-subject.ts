import { Observable, Observer, Subject, interval } from 'rxjs';

const observer: Observer<any> = {
  next: valor => console.log('Valor:', valor),
  error: error => console.warn('Error:', error),
  complete: () => console.info('Completado'),
};

const intervalo$ = new Observable(subscriber => {
  const intervalId = setInterval(
    () => {
      subscriber.next(Math.random());
    }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log('intervalo destruido');
  }
});


const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);

  subject$.complete();

  subscription.unsubscribe();
}, 3500);