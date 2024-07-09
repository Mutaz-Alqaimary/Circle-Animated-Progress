let numOfPercent = document.querySelector("#cont");
let submit = document.querySelector("input[type='button']");
let percent = document.querySelector("#percent");
let circle = document.querySelector("#svg #bar");

submit.addEventListener("click", function () {
  numOfPercent.setAttribute("data-pct", 0);
  let val = parseInt(percent.value);

  if (isNaN(val)) {
    val = 100;
  } else {
    let r = circle.getAttribute("r");
    // let c = Math.PI * (r * 2); // 550

    if (val < 0) {
      val = 0;
    }
    if (val > 100) {
      val = 100;
    }

    let pct = ((100 - val) / 100) * 550;

    let initial = 550;
    let num = numOfPercent.getAttribute("data-pct");

    let idStr = setInterval(frame1, 10);
    function frame1() {
      if (initial == pct) {
        clearInterval(idStr);
      } else {
        initial -= 5.5;
        circle.style.strokeDashoffset = initial;
      }
    }

    let idPercent = setInterval(frame2, 10);
    function frame2() {
      if (num == val) {
        clearInterval(idPercent);
      } else {
        num++;
        numOfPercent.setAttribute("data-pct", num);
      }
    }
  }
});
