import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/internal/operators';

const text = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec est at ante cursus euismod. Aliquam erat volutpat. Vestibulum ut placerat magna. Curabitur tincidunt eros purus, id mattis mauris dignissim non. Suspendisse lorem elit, elementum id urna nec, faucibus ornare turpis. Proin lorem dui, venenatis et pretium sit amet, auctor id mauris. Vestibulum tincidunt est non est posuere egestas. Nulla auctor dapibus ante, eu dictum odio pharetra a. Maecenas faucibus porta sapien eget tincidunt. Suspendisse posuere in risus vitae hendrerit. Mauris scelerisque tellus varius, tempor nunc sit amet, mollis dui. Quisque in nunc mauris. Morbi dictum, massa eget tempus molestie, nisl elit sodales velit, at vehicula enim risus eget massa. Proin varius lectus vel nunc dictum, ac semper erat semper. Integer blandit eleifend ex, in dignissim nibh interdum vitae. Morbi dignissim erat justo, ut commodo sapien egestas gravida.
<br /><br />
Nunc turpis tellus, pretium eget enim sit amet, placerat tempus tellus. Donec aliquam interdum libero non iaculis. Mauris venenatis facilisis quam, non convallis ex pharetra quis. Vestibulum sollicitudin quam ut dictum pharetra. Fusce sodales id dui et tempus. Aliquam interdum venenatis volutpat. In ac metus leo. Sed non placerat ante, vitae bibendum ligula. Mauris ac mattis nulla. Nullam et augue sit amet felis convallis faucibus ut at metus. Duis rhoncus, quam sed rutrum tincidunt, velit lacus congue ex, id aliquet dui lorem gravida urna. Vivamus venenatis ante ut elit hendrerit, sed aliquet nisi sagittis. Nulla facilisi. Praesent tellus odio, vestibulum quis pellentesque in, vestibulum quis turpis. Sed suscipit pretium massa at consectetur.
<br /><br />
Vestibulum vel orci rhoncus, pharetra sapien sit amet, feugiat erat. Curabitur bibendum pretium orci, vel sagittis nisi porta vel. Cras lacinia porttitor urna a tincidunt. Vestibulum sed efficitur velit. Proin fringilla quam lacus. Nam urna diam, pellentesque quis dolor id, viverra dapibus felis. Nullam congue tortor vitae ante pretium pulvinar. Cras libero orci, maximus in sollicitudin sit amet, scelerisque ut ligula. Etiam consectetur ultricies mi sollicitudin molestie. Nam convallis tincidunt iaculis. Suspendisse varius ut nisi placerat viverra. Nullam consequat tellus tellus, pellentesque semper orci cursus eu.
<br /><br />
Duis accumsan est lectus, quis tincidunt sapien dapibus ac. Mauris in diam enim. Ut et facilisis elit. Nunc gravida orci vel luctus rhoncus. Duis ullamcorper non risus eu fermentum. Aliquam sed semper odio, nec efficitur orci. Nulla justo lacus, tincidunt et elementum ultrices, viverra at neque. Phasellus tincidunt ipsum risus, at imperdiet ante aliquam sit amet. Donec sollicitudin sagittis dui, ac placerat elit rhoncus sed. In tellus purus, mollis ac nisl vel, dignissim dapibus quam. Nam a nulla et orci sagittis lobortis nec in dui.
<br /><br />
Nunc lacinia quam vel efficitur tempor. Pellentesque ornare eu leo eget volutpat. Phasellus et pulvinar orci. Nulla maximus ultrices posuere. Donec vehicula purus at mi sagittis consequat et nec augue. Morbi risus quam, porttitor mattis aliquet ut, dapibus at urna. Nulla interdum justo vitae est eleifend venenatis. Aenean bibendum lectus non magna posuere bibendum. Proin ultrices libero felis. Ut sagittis placerat felis ac tincidunt. Etiam nec risus egestas, venenatis justo quis, lobortis nibh. Etiam nisl velit, consectetur sit amet pellentesque quis, convallis viverra mi. Phasellus molestie nisl eget maximus fermentum.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');

progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calcularScroll = (e: any) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = e.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const progress$ = fromEvent(document, 'scroll')
  .pipe(
    map(calcularScroll),
    tap(console.log)
  );

progress$.subscribe(percentage => {
  progressBar.style.width = `${percentage}%`;
});


