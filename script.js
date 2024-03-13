const buttons = [
    { id: "button1", url: "/pages/page1.html" },
    { id: "button2", url: "/pages/page2.html" },
    { id: "button3", url: "/pages/page3.html" },
    { id: "button4", url: "/pages/page4.html" },
    { id: "home", url: "../index.html" }
  ];
  
  buttons.forEach(button => {
    const buttonElement = document.getElementById(button.id);
    if (buttonElement) {
      buttonElement.addEventListener("click", function () {
        showLoading();
        window.location.href = button.url;
      });
    }
  });
  
  function showLoading() {
    document.getElementById("loading").classList.remove("hidden");
  }
  
  function hideLoading() {
    document.getElementById("loading").classList.add("hidden");
  }