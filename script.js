let nut = document.querySelectorAll(".nutchuyen ul li"),
  slide = document.querySelectorAll(".slide ul li");
for (let i = 0; i < nut.length; i++) {
  nut[i].onclick = function () {
    for (let k = 0; k < nut.length; k++) {
      nut[k].classList.remove("active");
    }
    this.classList.add("active");
    // console.log(this.previousElementSibling);
    var nutactive = this;
    var vt = 0;
    for (vt = 0; nutactive = nutactive.previousElementSibling; vt++) {}
    // console.log(vt);
    for (var i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active');
        slide[vt].classList.add('active');       
    }
  }
}
