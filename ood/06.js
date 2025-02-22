// 6. Fluent Interface
function trim(str) {
  return str.trim().toLowerCase();
}

export default function normalize(arr) {
  const result = arr.reduce((acc, city) => {
    const name = trim(city.name);
    const country = trim(city.country);
    !acc[country] ? (acc[country] = [name]) : acc[country].push(name);
    return acc;
  }, {});

  return Object.keys(result)
    .sort()
    .reduce((acc, country) => {
      acc[country] = Array.from(new Set(result[country])).sort();
      return acc;
    }, {});
}

const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Moscow ', country: ' Russia' },
];

console.log(normalize(countries));
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }

const raw = [
  { name: 'istanbul', country: 'turkey' },
  { name: 'Moscow ', country: ' Russia' },
  { name: 'iStanbul', country: 'tUrkey' },
  { name: 'antalia', country: 'turkeY ' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Miami', country: 'usa' },
];
console.log(normalize(raw));
// {
//   france: [
//     'marcel',
//     'paris',
//   ],
//     spain: [
//   'madrid',
//   'valencia',
// ],
// };
