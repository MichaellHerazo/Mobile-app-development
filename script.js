let button1 = document.getElementById("button1");
if (button1) {
  button1.addEventListener("click", function () {
    showLoading();
    window.location.href = "/pages/page1.html";
  });
}

let button2 = document.getElementById("button2");
if (button2) {
  button2.addEventListener("click", function () {
    showLoading();
    //await new Promise(resolve => setTimeout(resolve, 10000));
    window.location.href = "/pages/page2.html";
  });
}

let button3 = document.getElementById("button3");
if (button3) {
  button3.addEventListener("click", function () {
    showLoading();
    window.location.href = "/pages/page3.html";
  });
}

let button4 = document.getElementById("button4");
if (button4) {
  button4.addEventListener("click", function () {
    showLoading();
    window.location.href = "/pages/page4.html";
  });
}

let homeButton = document.getElementById("home");
if (homeButton) {
  homeButton.addEventListener("click", function () {
    showLoading();
    window.location.href = "../index.html";
  });
}

function showLoading() {
  document.getElementById("loading").classList.remove("hidden");
}

function hideLoading() {
  document.getElementById("loading").classList.add("hidden");
}
