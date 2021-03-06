import View from './View';
import icons from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query. Please try again!!';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);
    return `
            <li class="preview ${
              result.id === id ? 'preview__link--active' : ''
            }">
            <a class="preview__link " href="#${result.id}">
            <figure class="preview__fig">
                <img src="${result.image}" crossorigin alt="Test" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">
                ${result.title}
                </h4>
                <p class="preview__publisher">${result.publisher}</p>
                <div class="preview__user-generated ${
                  result.key ? '' : 'hidden'
                }">
                  <svg>
                  <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
            </div>
          </a>
        </li>`;
  }
}

export default new ResultView();
