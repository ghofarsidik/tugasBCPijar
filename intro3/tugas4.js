fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
        
      throw new Error('Gagal memuat data.');
    }
    return response.json();
  })
  .then(data => {
    data.map(item => {
      console.log(item.name);
    });
  })
  .catch(error => {
    console.error('Kesalahan terjadi:', error.message);
  });