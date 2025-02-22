// 4. Изменяемая конфигурация
export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  static getNewOptions(oldOptions, newOptions) {
    return Object.assign(structuredClone(oldOptions), newOptions);
  }

  constructor(options) {
    this.options = this.constructor.getNewOptions(this.constructor.defaultOptions, options);
  }

  truncate(text, newOptions = {}) {
    const options = this.constructor.getNewOptions(this.options, newOptions);
    if (text.length > options.length) {
      return text.substring(0, options.length).concat(options.separator);
    }
    return text;
  }
}

// const truncater = new Truncater();
// console.log(truncater.truncate('one two')); // 'one two'
// console.log(truncater.truncate('one two', { length: 6 })); // 'one tw...'

const truncater = new Truncater({ length: 6 });
console.log(truncater.truncate('one two', { separator: '.' })); // 'one tw.'
console.log(truncater.truncate('one two', { length: 3 })); // 'one...'
