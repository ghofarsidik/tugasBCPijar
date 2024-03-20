let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
}

//tugas a
let newData = {
  name: "Abdul Ghaffar Sidik",
  email: "ghofarassidik@gmail.com",
  hobby: "crafting"
}

let dataBaru = {
  ...data, ...newData
}
console.log(dataBaru)

//tugas b
let { street, city:kota } = dataBaru.address

console.log(street)
console.log(kota)