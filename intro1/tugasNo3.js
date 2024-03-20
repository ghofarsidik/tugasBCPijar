let x = 7
let jarak = x
let angka = 1
for (let i = 1; i<=x; i++){
  let baris = "";

  for (let y = 1; y < jarak; y++){
    baris = baris + " ";
  }

  for (let z = 1; z <= angka; z++){
    baris = baris + z + " ";
  }

  console.log(baris);

  jarak--;
  angka++;
}