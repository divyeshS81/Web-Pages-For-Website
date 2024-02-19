fetch('https://fakestoreapi.com/products').then((data) => {
  return data.json();
}).then((fetchdata) => {
  let data1= "";
  fetchdata.map((values)=>{
    data1
  });



}).catch((error)=>{
  console.log(error);
})