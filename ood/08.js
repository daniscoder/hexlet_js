// 8. Прокси
function validate(target, key, protectedProps) {
  if (!(key in target) || new Set(protectedProps).has(key)) {
    throw new Error(`Access to '${key}' is restricted`);
  }
}

export default function protect(user, protectedProps) {
  return new Proxy(user, {
    get(target, key) {
      validate(target, key, protectedProps);
      return target[key];
    },
    set(target, key, value) {
      validate(target, key, protectedProps);
      target[key] = value;
      return true;
    },
  });
}

const user = {
  name: 'John',
  age: 25,
  password: 'secret',
};

const protectedProps = ['password'];

const protectedUser = protect(user, protectedProps);
console.log(protectedUser.name); // John
console.log(protectedUser.age); // 25
// console.log(protectedUser.password); // Error: Access to 'password' is restricted

console.log((protectedUser.name = 'Jane')); // установит значение 'Jane' в свойство 'name'
console.log((protectedUser.password = 'newPassword')); // Error: Access to 'password' is restricted
