class EventEmitter {
  // static _instance
  
  // constructor() {
  //   if (_instance) {
  //     return this._instance
  //   }
  //   this._instance = this;
  //   this.events = {};
  // }
    
  /**
   * @param {string} eventName
   * @param {Function} callback
   */
  subscribe(eventName, callback) {
    !this.events[eventName] && (this.events[eventName] = []);
    this.events[eventName].push(callback);
  }
  
  /**
   * @param {string} eventName
   * @param {Function} callback
   */
  unsubscribe(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(eventCallback => callback !== eventCallback);
  }
  
  /**
   * @param {string} eventName
   * @param {any} args
   */
  emit(eventName, args) {
    const event = this.events[eventName];
    event && event.forEach(callback => callback.call(null, args));
  }
}
const emit = new EventEmitter() 

export default emit 