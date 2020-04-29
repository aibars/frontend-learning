import { interval, fromEvent, of } from 'rxjs';
import { take, exhaustMap, tap, map, mergeMap, pluck, catchError, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// helper 
const loginHttpRequest = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
  pluck('response', 'token'),
  catchError(err => of(''))
);


// create form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitBtn = document.createElement('button');

// settings
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';
inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';
submitBtn.innerHTML = 'Submit';

form.append(inputEmail, inputPassword, submitBtn);

document.querySelector('body').append(form);

// streams

const submitForm$ = fromEvent(form, 'submit').pipe(
  tap(ev => ev.preventDefault()),
  map(ev => ({
    email: ev.target[0].value,
    password: ev.target[1].value
  })),
  exhaustMap(loginHttpRequest)
);

submitForm$.subscribe(token => console.log(token));
