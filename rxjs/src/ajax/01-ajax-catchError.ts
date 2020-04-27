import { ajax, AjaxError } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
const url = 'https://api.github.com/users?per_page=5';

const fetchPromise = fetch(url);

const handleErrors = (resp: Response) => {
  if (!resp.ok) { throw new Error(resp.statusText); }

  return resp;
}

// fetchPromise
//   .then(handleErrors)
//   .then(resp => resp.json())
//   .then(data => console.log(data))
//   .catch(error => console.warn('users error', error));

ajax(url)
  .pipe(
    map(resp => resp.response),
    catchError((e: AjaxError) => {
      console.warn(e.message);
      return of([]);
    })
  )
  .subscribe((users) => console.log('users:', users)); 