function updateDOM(string) {
  clearIt();

  Identicon.array = md5.array(string).slice(0,15);

  Identicon.array.forEach((number,i)=>{
    new Identicon(number,i);
  });

  Identicon.all.slice(0,10).reverse().forEach(square=>{
    let newObj = Object.assign({}, square);
    newObj.column = 4 - square.column;
    Identicon.all.push(newObj);
  });

  Identicon.all.forEach(square=>{
    document.getElementById(`${square.row}-${square.column}`).style.backgroundColor = square.color;
  });


}

function clearIt(){
  Identicon.all = [];
  document.querySelectorAll('span').forEach(span=>{
    span.style.backgroundColor = 'rgb(240, 240, 240)';
  });
}
