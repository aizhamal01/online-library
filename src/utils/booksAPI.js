import FetchWrapper from './fetchWrapper';

/**
 * @class
 */
class BooksAPI {
  static #API = new FetchWrapper('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/');

  static #APP_ID = 'mDm4dEiEhEvX6B1jDkZT';

  /**
   * @method getAllBooks
   * @returns {object}
   * @memberof BooksAPI
   */
  static async getAllBooks() {
    const response = await this.#API.get(`apps/${this.#APP_ID}/books`);
    return response;
  }

  /**
   * @method postBook
   * @param {object} data 
   * @returns {boolean}
   * @memberof BooksAPI
   */
  static async postBook(data) {
    const response = await this.#API.post(`apps/${this.#APP_ID}/books`, data);
    return response;
  }

  /**
   * @method deleteBook
   * @param {string} id 
   * @returns {string}
   * @memberof BooksAPI
   */
  static async deleteBook(id) {
    const response = await this.#API.delete(`apps/${this.#APP_ID}/books/${id}`);
    return response;
  }
}

export default BooksAPI;
