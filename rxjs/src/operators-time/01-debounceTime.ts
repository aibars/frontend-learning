import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

// # 1
click$.pipe(
  debounceTime(3000)
)//.subscribe(console.log);

// #2
const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<any>(input, 'keyup');


input$.pipe(
  debounceTime(1000),
  pluck('target', 'value'),
  distinctUntilChanged()
).subscribe(console.log);