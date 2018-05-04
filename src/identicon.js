class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html

  constructor(number,index){
    this.number = number;
    this.row = (index + 1) % 5;
    this.column = this.row < 3 ? Math.floor((index/5)) : Identicon.all[index-2].column;
    Identicon.all.push(this);
  }


}
