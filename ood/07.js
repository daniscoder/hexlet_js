// 7. Сборщики
import yup from 'yup';

const genres = ['drama', 'horror', 'fantasy', 'classic'];

const schema = yup.object().shape({
  name: yup.string().required(),
  author: yup.string().required(),
  pagesCount: yup.number().positive().integer(),
  link: yup.string().url().min(1),
  genre: yup.string().oneOf(genres),
});

export default function getInvalidBooks(books) {
  return books.filter((book) => !schema.isValidSync(book));
}

const books = [{ name: 'book', author: 'author' }, { author: 'author 2' }];
console.log(getInvalidBooks(books)); // [{ author: 'author 2' }]

const books4 = [
  {
    name: 'besi',
    author: 'dostoevski',
    pagesCount: 100,
    genre: 'drama',
    link: 'https://some.ru',
  },
  {
    name: 'voina i mir',
    author: 'lev tolstoy',
    pagesCount: 1000,
    genre: 'drama',
    link: '', // не может быть пустой строкой
  },
];
console.log(getInvalidBooks(books4));
