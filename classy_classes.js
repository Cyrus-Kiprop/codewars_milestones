class Person {
    constructor(name, age) {
    this.age=age;
    this.name=name;
   // this.info = this.info.bind(this);
    }
    get info(){
    return(`${this.name}s age is ${this.age}`)
    }
  }