import { asyncScheduler } from 'rxjs';

const saludar = () => console.log('hola');
const saludar2 = (nombre) => console.log(`hola ${nombre}`);

//asyncScheduler.schedule(saludar, 2000);
//asyncScheduler.schedule(saludar2, 2000, 'Agustín');

const subs = asyncScheduler.schedule(function (state) {
  console.log('state', state);

  this.schedule(state + 1, 1000);
}, 3000, 0);

// terminar el async scheduler con un setTimeout
// setTimeout(() => {
//   subs.unsubscribe();
// }, 10000);

// otra forma de terminar el scheduler es con otro async scheduler
asyncScheduler.schedule(() => subs.unsubscribe(), 10000);