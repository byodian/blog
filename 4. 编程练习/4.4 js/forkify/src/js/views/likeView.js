import { elements } from './base';
import { limitTitle } from './searchView';

export const toggleLikeBtn = isLiked => {
  const iconSring = isLiked ? 'icon-heart' : 'icon-heart-outlined'
  document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconSring}`);
}

export const toggleLikeList = numLikes => {
  elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};

export const renderLikes = likeItem => {
  const makeup = `
    <li>
      <a class="likes__link" href="#${likeItem.id}">
          <figure class="likes__fig">
              <img src="${likeItem.img}" alt="${likeItem.title}">
          </figure>
          <div class="likes__data">
              <h4 class="likes__name">${limitTitle(likeItem.title)}</h4>
              <p class="likes__author">${likeItem.author}</p>
          </div>
      </a>
    </li>
  `;

  elements.likeList.insertAdjacentHTML('beforeend', makeup);
};

export const deleteLikeItem = id => {
  const item = document.querySelector(`.likes__link[href*="#${id}"]`).parentElement;
  if (item) item.remove();
};