// Промисы (практика промисов и асинхронности) ===========

// 1 ==============================
const delay = ms => new Promise(resolve => setTimeout(resolve(100), ms));

delay(1000).then(value => console.log('Done with ' + value)); // Done with 100

// 2 ===================================
const firstUrl = 'http://www.json-generator.com/api/json/get/cfQCylRjuG';
const secondUrl = 'http://www.json-generator.com/api/json/get/cfVGucaXPC';

const httpGet = url => fetch(url).then(response => response.json());

const getDataMethodPromise = (url1, url2) => httpGet(url1)
  .then(({getUsersData}) => getUsersData ? httpGet(url2)
    .then(result => console.log(result)) : console.error('error'));

const getDataMethodAsyncAwait = async (url1, url2) =>
  (await httpGet(url1))['getUsersData'] ? console.log(await httpGet(url2))
    : console.error('error');

getDataMethodAsyncAwait(firstUrl, secondUrl);
getDataMethodPromise(firstUrl, secondUrl);

// 3 ===================================
const urlsArr = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

function makeRequestsConsistently(urls) {
  const results = [];
  let chain = Promise.resolve();

  urls.forEach(url => chain = chain.then(() => httpGet(url))
    .then(result => results.push(result)),
  );

  chain.then(() => console.log(results));
}

async function makeRequestsConsistently2(urls) {
  const result = [];

  for (let i = 0; i < urls.length; i++) {
    await httpGet(urls[i]).then(response => result.push(response));
  }

  console.log(result);
}

const makeRequestsParallel = urls => Promise.all(urls.map(httpGet))
  .then(result => console.log(result));

makeRequestsConsistently(urlsArr);
makeRequestsConsistently2(urlsArr);
makeRequestsParallel(urlsArr);

// 4 ===================================

const getResolvedPromise = value =>
  new Promise(resolve => resolve(value));

getResolvedPromise(500)
  .then((value) => if (value > 300){
  throw new Error('Ошибка')
    .catch(alert);