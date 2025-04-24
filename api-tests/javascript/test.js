const axios = require('axios');

async function runTest() {
  const loginRes = await axios.post('https://api.demoblaze.com/login', {
    username: 'user123',
    password: 'pass123',
  });

  await axios.post('https://api.demoblaze.com/add');

  console.log('Test complete!');
}

runTest();