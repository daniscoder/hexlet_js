// 3. Конфигурация
const hasNumber = (string) => string.search(/\d/) !== -1;

export default class PasswordValidator {
  options = {}

  constructor(obj = {}) {
    this.options.minLength = Object.hasOwn(obj, 'minLength') ? obj.minLength : 8;
    this.options.containNumbers = Object.hasOwn(obj, 'containNumbers') ? obj.containNumbers : true;
  }

  validate(passwd) {
    const res = {};
    if (passwd.length < this.options.minLength) {
      res.minLength = 'too small';
    }
    if (this.options.containNumbers && !hasNumber(passwd)) {
      res.containNumbers = 'should contain at least one number';
    }
    return res;
  }
}

const validator = new PasswordValidator({ containNumbers: false });
console.log(validator.validate('qwertya3sdf')); // {}
console.log(validator.validate('qwerty')); // { minLength: 'too small' }
