class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(input){
  	this.input = input;
  	this.hashArr = md5.array(input);
  	this.color = [this.hashArr[0], this.hashArr[1],
  				  this.hashArr[2]];
  }
}
