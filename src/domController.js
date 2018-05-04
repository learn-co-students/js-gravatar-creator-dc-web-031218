function updateDOM(string) {
  Identicon.all = [];
  document.querySelectorAll('span').forEach(span=>{
    span.style.backgroundColor = 'rgb(240, 240, 240)';
  });

  let array = md5.array(string).slice(0,15);

  array.forEach((number,i)=>{
    new Identicon(number,i);
  });

  Identicon.all.slice(0,10).reverse().forEach(square=>{
    let newObj = Object.assign({}, square);
    newObj.column = 4 - square.column;
    Identicon.all.push(newObj);
  });

  Identicon.all.forEach(square=>{
    if (square.number % 2==0){
      square.color = `rgb(${array[0]}, ${array[1]}, ${array[2]})`;
    }
    document.getElementById(`${square.row}-${square.column}`).style.backgroundColor = square.color;
  });


}
