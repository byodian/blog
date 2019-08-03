import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => elements.searchInput.value = '';

export const clearRes = () => {
  elements.searchResList.innerHTML = '';
  elements.searchResPages.innerHTML = '';
}

export const highLightSelected = id => {
  // 添加 class 之前先删除所有 'results__link__active' 
  const result = Array.from(document.querySelectorAll('.results__link'));
  result.forEach(el => {
    el.classList.remove('results__link--active');
  });
  document.querySelector(`.results__link[href="#${id}"]`).classList.add('results__link--active');
};

export const limitTitle = (title, limit = 17) => {
  const newTitle = [];

/**
 * tomato and potato noodle -> ['tomato', 'and', 'potato', 'noodle']
 * acc = 0 / cur = 'tomato' / acc + cur.length = 6 / ['tomato']
 * acc = 6 / cur = 'and'    / acc + cur.length = 9 / ['tomato', 'and']
 * acc = 9 / cur = 'potato' / acc + cur.length = 15 / ['tomato', 'and', 'potato']
 * acc = 15 / cur = 'noodle' /acc + cur.length = 21 / ['tomato', 'and', 'potato']
 * */ 

  if (title.length >= limit) {
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);

    return `${newTitle.join(' ')} ...`
  }

  return title;
}

const renderRecipe = recipe => {
  const markup = `
  <li>
    <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitTitle(recipe.title)}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
  </li>
    `;

    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

/**
 * The search results pagination
 * 1. To change the render results function, because that's the function that will be called
 * whenever we click on one of the buttons.
 * 
 * 2. We need to implement later is to render these buttons actually on the interface
 * 
 * 3. We will be to attach some event handlers to these buttons 
 * in order to actually make the functionality work
 * 
 * 
 * 
 * imagine we click on the button to go to page number 2.
 * Then these render results will be called and page will be set to two.
 */

// typr: 'prev' or 'next' 
const createButton = (page, type) => `
  <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
    </svg>
    </button>
`;

const renderButtons = (page, numResults, resPerpage) => {
  const pages = Math.ceil(numResults / resPerpage);

  /**
   * imagine that we only have one page
   * we actually don't really want to display any buttons
   * at all.
   * 
   * page ===1 && page < pages
   * page === pages && pages > 1
   */
  let button;
  if (page === 1 && page < pages) {
    // Only button to go to next page
    button = createButton(page, 'next');
  } else if (page < pages) {
    // Both buttons 
    button = `
      ${createButton(page, 'prev')}
      ${createButton(page, 'next')}
    `;

  } else if (page === pages && pages > 1) {
    // Only button to go to prev page
    button = createButton(page, 'prev');
  }

  elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerpage = 10) => {
  // render the results
  const start = (page - 1) * resPerpage;
  const end = page * resPerpage;
  recipes.slice(start, end).forEach(renderRecipe);

  // render the pagination
  renderButtons(page, recipes.length, resPerpage);
}
