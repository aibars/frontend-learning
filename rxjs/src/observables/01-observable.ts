import { Observable, Observer } from 'rxjs';

//const obs$ = Observable.create();


const observer: Observer<any> = {
  next: valor => console.log('Valor:', valor),
  error: error => console.warn('Error:', error),
  complete: () => console.info('Completado'),
};


const obs$ = new Observable<string>(subscriber => {
  subscriber.next('Hola');
  subscriber.next('mundo');

  //Forzar error
  // const a = undefined;
  // a.nombre = '';

  subscriber.complete();
});


obs$.subscribe(observer);

// obs$.subscribe(valor => console.log(valor),
//   error => console.warn('error:', error),
//   () => console.info('completado')
// );