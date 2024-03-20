const bIndo = 90;
const bIng = 1;
const math = 80;
const ipa = 80;

if (0 <= bIndo && bIndo <= 100 && 0 <= bIng && bIng <= 100 && 0 <= math && math <= 100 && 0 <= ipa && ipa <= 100) {

  let rataRata = (bIndo + bIng + math + ipa) / 4;

  if (rataRata >= 90) {
    nilai = "A"
  } else if (rataRata >= 80) {
    nilai = "B"
  } else if (rataRata >= 70) {
    nilai = "C/"
  } else if (rataRata >= 60) {
    nilai = "D"
  } else {
    nilai = "E"
  }
  console.log("Nilai rata-rata yang anda dapatkan adalah", rataRata)
  console.log("Nilai anda adalah", nilai);

}
else {
  console.log("Periksa kembali nilai yang anda input")
}


