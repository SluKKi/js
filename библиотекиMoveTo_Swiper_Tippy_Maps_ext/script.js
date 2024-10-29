//moveTo

const moveTo = new MoveTo();
const button = document.querySelectorAll("button");
button.forEach(btn => moveTo.registerTrigger(btn));

//tippy

tippy('[data-tippy-content]');





