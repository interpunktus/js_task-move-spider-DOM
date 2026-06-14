'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let left = e.clientX - wallRect.left - spiderRect.width / 2;
  let topPosition = e.clientY - wallRect.top - spiderRect.height / 2;

  left = Math.max(0, Math.min(left, wallRect.width - spiderRect.width));

  topPosition = Math.max(
    0,
    Math.min(topPosition, wallRect.height - spiderRect.height),
  );

  spider.style.left = `${left}px`;
  spider.style.top = `${topPosition}px`;
});
