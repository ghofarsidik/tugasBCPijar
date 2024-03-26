fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Gagal memuat data.');
    }
    return response.json();
  })
  .then(response => {
    response.map(data => {
      console.log(data.name);
    });
  })
  .catch(error => {
    console.error('Kesalahan terjadi:', error.message);
  });