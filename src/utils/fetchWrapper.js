/**
 * @class 
 */
export default class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  /**
   * @function get 
   * @param {string} endpoint
   * @returns {object} 
   */
  async get(endpoint) {
    const response = await fetch(this.baseURL + endpoint);
    return response.json();
  }

  /**
   * @function post
   * @param {string} endpoint 
   * @param {object} data
   * @returns {object} 
   */
  async post(endpoint, data) {
    const response = await fetch(this.baseURL + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  /**
   * @function delete 
   * @param {string} endpoint
   * @param {object} data 
   * @returns {object} 
   */
  async delete(endpoint) {
    const response = await fetch(this.baseURL + endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  }
}
