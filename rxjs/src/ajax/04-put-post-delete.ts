import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

ajax.post(url, { Name: 'Agustín' }, {
  Token: 'abc123'
}).subscribe(console.log);

ajax.put(url, { Name: 'Agustín' }, {
  Token: 'abc123'
}).subscribe(console.log);

ajax({
  url,
  method: 'PUT',
  headers: { 'my-token': '123' },
  body: { id: 1, name: 'Agustín' }
}).subscribe(console.log);