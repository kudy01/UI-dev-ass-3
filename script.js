function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
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

function toggleDropdown1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
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

function toggleDropdown2() {
  document.getElementById("myDropdown2").classList.toggle("newShow");
}

// Close the dropdown if the user clicks outside of it
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

function toggleDropdown3() {
  document.getElementById("myDropdown3").classList.toggle("newShow");
}

// Close the dropdown if the user clicks outside of it
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

function showPromo() {
  if (document.getElementById("promo-code").value) {
    document.getElementById("promo-error").style.display = "none";
    document.getElementById("promo-success").style.display = "block";
  } else {
    document.getElementById("promo-success").style.display = "none";
    document.getElementById("promo-error").style.display = "block";
  }
}

function showImage() {
  if (document.getElementById("postcode").value) {
    document.getElementById("error").style.display = "none";
    document.getElementById("image").style.display = "inline";
  } else {
    document.getElementById("error").style.display = "inline";
    document.getElementById("image").style.display = "none";
  }
}
