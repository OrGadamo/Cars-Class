class Car {
  constructor(wheelsNumber, engineVolume, carColor) {
    this.wheelsNumber = wheelsNumber;
    this.engineVolume = engineVolume;
    this.carColor = carColor;
  }
  getCarDetails() {
    return `Number Of Wheels: ${this.wheelsNumber} \nEngine Volume: ${this.engineVolume} \nCar Color: ${this.carColor} \n`;
  }
  static getMaxEngine(carsArr) {
    console.log(carsArr);
    let maxEngine = carsArr[0];
    console.log(maxEngine);
    carsArr.forEach((car) => {
      if (car.engineVolume > maxEngine.engineVolume) {
        maxEngine = car;
      }
    });
    return maxEngine;
  }
}
class SportCar extends Car {
  constructor(wheelsNumber, engineVolume, carColor, carName) {
    super(wheelsNumber, engineVolume, carColor);
    this.carName = carName;
  }
  getCarDetails() {
    return `Car Name:${this.carName} \n` + super.getCarDetails();
  }
  get ChangedCarName() {
    return this.getUppercaseNameLetter();
  }
  getUppercaseNameLetter() {
    return (
      this.carName[0].toUpperCase() +
      this.carName.substring(1, this.carName.length - 1) +
      this.carName[this.carName.length - 1].toUpperCase()
    );
  }
}
class SUVCar extends Car {
  constructor(wheelsNumber, engineVolume, carColor, carName) {
    super(wheelsNumber, engineVolume, carColor);
    this.carName = carName;
  }
  getCarDetails() {
    return `Car Name:${this.carName} \n` + super.getCarDetails();
  }
}
class Boat extends Car {
  constructor(wheelsNumber, engineVolume, boatColor, carName) {
    super(wheelsNumber, engineVolume, boatColor);
    this.carName = carName;
  }
  getCarDetails() {
    return `Car Name:${this.carName} \n` + super.getCarDetails();
  }
}
function displayForm() {
  if (select_car.value == "normal") {
    name_label.style.display = "none";
    name_input.style.display = "none";
    return;
  }
  name_label.style.display = "block";
  name_input.style.display = "block";
}
function submitCar() {
  let newCar;
  switch (select_car.value) {
    case "normal":
      newCar = new Car(
        +wheels_input.value,
        +engine_input.value,
        color_input.value
      );
      break;
    case "sport":
      newCar = new SportCar(
        +wheels_input.value,
        +engine_input.value,
        color_input.value,
        name_input.value
      );
      break;
    case "SUV":
      newCar = new SUVCar(
        +wheels_input.value,
        +engine_input.value,
        color_input.value,
        name_input.value
      );
      break;
    default:
      newCar = new Boat(
        +wheels_input.value,
        +engine_input.value,
        color_input.value,
        name_input.value
      );
      break;
  }
  return newCar;
}
function createTableLine() {
  if (t_headers.innerHTML == "") {
    createTableHeader();
  }
  const vehicle = submitCar();
  let line = document.createElement("tr");
  for (let key in vehicle) {
    line.innerHTML += `<td>${vehicle[key]}</td>`;
  }
  if (vehicle["carName"] == undefined) {
    line.innerHTML += "<td>None</td>";
  }
  table_body.appendChild(line);
  return false;
}
function createTableHeader() {
  let tHeaders = ["Wheels Number", "Engine Volume", "Color", "Vehicle Name"];
  tHeaders.forEach((theader) => {
    let header = document.createElement("th");
    header.innerText = theader;
    t_headers.appendChild(header);
  });
}
