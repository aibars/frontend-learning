import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

const handleError = (resp: AjaxError) => {
  console.warn('error:', resp.message);
  return of({});
};

// const obs$ = ajax.getJSON(url).pipe(
//   catchError(handleError)
// );
// const obs2$ = ajax(url).pipe(
//   catchError(handleError)
// );

const obs$ = ajax.getJSON(url).pipe(
  catchError(handleError)
);
const obs2$ = ajax(url).pipe(
  catchError(handleError)
);

obs$.pipe(
  catchError(handleError) //this will fire the warning and complete the observable
).subscribe({
  next: (val) => console.log('next:', val),
  error: err => console.warn(err), //this funcion won't be called
  complete: () => console.log('complete') //complete gets fired after handleError throws exception
});

// obs2$.subscribe(data => console.log(data));

