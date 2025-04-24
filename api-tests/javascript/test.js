const axios = require('axios');

async function runTest() {
  const loginRes = await axios.post('https://api.demoblaze.com/login', {
    username: 'user123',
    password: 'pass123',
  });

  await axios.post('https://api.demoblaze.com/addtocart', {
    cookie: token,
    prod_id: 1,
    id: '123',
    flag: false
  });

  await axios.get('https://api.demoblaze.com/viewcart');

  console.log('Test complete!');
}

runTest();