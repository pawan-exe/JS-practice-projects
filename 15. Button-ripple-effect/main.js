const getAllButtons = document.querySelectorAll(".ripple-effect");

getAllButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.clientX, e.target.offsetLeft, e.clientY, e.target.offsetTop);

    let xCoordinateValue = e.clientX - e.target.offsetLeft;
    let yCoordinateValue = e.clientY - e.target.offsetTop;

    let rippleElement = document.createElement("span");
    rippleElement.style.left = `${xCoordinateValue}px`;
    rippleElement.style.top = `${yCoordinateValue}px`;

    btn.appendChild(rippleElement);

    window.setTimeout(() => {
      rippleElement.remove();
    }, 600);
  });
});
