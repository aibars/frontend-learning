import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

// # 1
click$.pipe(
  throttleTime(3000)
)//.subscribe(console.log);

// #2
const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<any>(input, 'keyup');


input$.pipe(
  throttleTime(400, asyncScheduler, {
    leading: false,
    trailing: true
  }),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe(console.log);