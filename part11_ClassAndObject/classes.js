class ToyotaCar {
  constructor(brand, mileage) {
    this.brand = brand;
    this.mileage = mileage;
    console.log("Inside the constructor", brand, mileage);
  }
  start() {
    console.log("car can start");
  }
  stop() {
    console.log("car can stop");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}

let fortuner = new ToyotaCar("Toyota", 13);
fortuner.setBrand("Suzuki");
fortuner.brand = "ToySuzuki";
console.log(fortuner.brand);

let hyrider = new ToyotaCar("Toyota", 19);
console.log(fortuner.brand);
console.log(hyrider);

//Exception Handling

let a = 10;
let b = 0;
try {
  let c = a / b;
  console.log(c);
} catch (error) {
  console.log(error);
}
