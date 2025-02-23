// 13. new Promise
export const wait = (interval) => new Promise(resolve => setTimeout(resolve, interval));

wait(100).then(() => console.log('time is over!'));
