const view = {
  setImage() {
    let carImg = document.getElementById("carImg");
    img = document.getElementById("car-list").value;
    carImg.src = img;
  },
  showList() {
    let domList = document.getElementById("car-list");
    let opt = "";

    for (car of model.cars) {
      opt += `<option value="` + car.img + `">` + car.model + `</option>`;
    }
    domList.innerHTML += opt;
  },
};
