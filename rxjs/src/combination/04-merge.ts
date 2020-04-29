import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyUp$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(keyUp$.pipe(
  pluck('type')
), click$.pipe(
  pluck('type')
)).subscribe(console.log);