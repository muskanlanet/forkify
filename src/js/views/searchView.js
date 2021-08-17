class SearchView {
  #parentele = document.querySelector('.search');

  getQuery() {
    const query = this.#parentele.querySelector('.search__field').value;
    this.clearInputs();
    return query;
  }

  clearInputs() {
    this.#parentele.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parentele.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
