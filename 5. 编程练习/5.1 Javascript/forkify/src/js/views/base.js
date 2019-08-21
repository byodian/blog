export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchResPages: document.querySelector('.results__pages'),
  searchResList: document.querySelector('.results__list'),
  recipe: document.querySelector('.recipe'),
  shopping: document.querySelector('.shopping__list'),
  likesMenu: document.querySelector('.likes__field'),
  likeList: document.querySelector('.likes__list')
};

export const elementsString = {
  loader: 'loader'
};

export const renderLoader = parent => {
  const loader = `
    <div class="${elementsString.loader}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `;

  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementsString.loader}`);
  if (loader) {
    loader.remove();
  }
};