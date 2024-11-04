const scroll = new LocomotiveScroll({
  el: document.querySelector('#main1'),
  smooth: true,
  // lerp:0.05,
  lerp:0.04,
});
function sub() {
  var isvalid = true;

  if (document.getElementById('name').value === "") {
      document.getElementById('nameerror').innerText = "Can't be empty";
      isvalid = false;
  } else {
      document.getElementById('nameerror').innerText = "";
  }

  if (document.getElementById('email').value === "") {
      document.getElementById('emailerror').innerText = "Can't be empty";
      isvalid = false;
  } else {
      document.getElementById('emailerror').innerText = "";
  }
  if (document.getElementById('cities').value === "Select") {
      document.getElementById('selecterror').innerText = "Please select a city";
      isvalid = false;
  } else {
      document.getElementById('selecterror').innerText = "";
  }

  if (document.getElementById('address').value === "") {
      document.getElementById('addresserror').innerText = "Can't be empty";
      isvalid = false;
  } else {
      document.getElementById('addresserror').innerText = "";
  }

  if (!document.getElementById('male').checked &&
      !document.getElementById('female').checked) {
      document.getElementById('gendererror').innerText = "Please select a gender";
      isvalid = false;
  } else {
      document.getElementById('gendererror').innerText = "";
  }
  return isvalid;
}
