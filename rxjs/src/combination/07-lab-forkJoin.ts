import { of, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'aibars';

forkJoin({
  user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos123123`).pipe(
    catchError(e => of([])) 
  ),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
}).pipe(
  catchError((e: Error) => of(e.message))
).subscribe(console.log);