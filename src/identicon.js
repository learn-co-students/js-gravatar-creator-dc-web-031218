class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html

  constructor(number,index){
    this.number = number;
    this.color = this.colorize();
    this.row = (index + 1) % 5;
    this.column = Math.floor((index/5));
    Identicon.all.push(this);
  }

  colorize(){
    if (this.number % 2 == 0){
      return `rgb(${Identicon.array[0]}, ${Identicon.array[1]}, ${Identicon.array[2]})`;
    }
  }

}
