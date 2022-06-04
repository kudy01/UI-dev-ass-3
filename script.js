var input = document.getElementById("item-search");

// To make the search input tag simulate a button click on enter
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
});

// To toggle the dropdown on the different sliders present
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// To toggle the dropdown on the different sliders present
function toggleDropdown1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// To toggle the dropdown on the different sliders present
function toggleDropdown2() {
  document.getElementById("myDropdown2").classList.toggle("newShow");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("newShow")) {
        openDropdown.classList.remove("newShow");
      }
    }
  }
};

// To toggle the dropdown on the different sliders present
function toggleDropdown3() {
  document.getElementById("myDropdown3").classList.toggle("newShow");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("newShow")) {
        openDropdown.classList.remove("newShow");
      }
    }
  }
};

// To show the promo code error/success messages
function showPromo() {
  if (document.getElementById("promo-code").value) {
    document.getElementById("promo-error").style.display = "none";
    document.getElementById("promo-success").style.display = "block";
  } else {
    document.getElementById("promo-success").style.display = "none";
    document.getElementById("promo-error").style.display = "block";
  }
}

// To show the shipping message upon entering postcode
function showImage() {
  if (document.getElementById("postcode").value) {
    document.getElementById("error").style.display = "none";
    document.getElementById("image").style.display = "inline";
  } else {
    document.getElementById("error").style.display = "inline";
    document.getElementById("image").style.display = "none";
  }
}

// Functions to open and close the hamburger nav menu in the mobile version
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
