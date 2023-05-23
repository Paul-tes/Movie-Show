import './styles/style.css';
import { retrieveItems } from './modules/display.js';

for(let i =1; i < 7; i++){
    const ans = await retrieveItems(i);

    const div = document.createElement('div');
    div.className ='container';
    const img = document.createElement('img');
    img.src = ans.image.medium;
    const span = document.createElement('span');
    span.innerHTML = `${ans.name}`;
    const comment = document.createElement('a')
    comment.innerHTML = 'Comments';
    comment.href = ''
    const reservations = document.createElement('a')
    reservations.innerHTML = 'Reservations';
    reservations.href = '';

    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(comment);
    div.appendChild(reservations);

    const main = document.querySelector('main');
    main.appendChild(div);
}