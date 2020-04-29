import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUsersResp, GithubUser } from '../interfaces/github-users.interface';

const body = document.querySelector('body');
const input = document.createElement('input');
const orderedList = document.createElement('ol');

body.append(input, orderedList);
//Helpers
const showUsers = (users: GithubUser[]) => {
  orderedList.innerHTML = '';
  console.log(users);

  for (const user of users) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;
    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'View page';
    anchor.target = '_blank';
    li.append(img);
    li.append(user.login + '  ');
    li.append(anchor);
    orderedList.append(li);
  }
}

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, string>('target', 'value'),
  map<string, Observable<GithubUsersResp>>(txt => ajax.getJSON(`https://api.github.com/search/users?q=${txt}`)),
  mergeAll<GithubUsersResp>(),
  pluck<GithubUsersResp, GithubUser[]>('items')
).subscribe(showUsers);