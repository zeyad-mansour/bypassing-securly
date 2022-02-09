function setInfo() {
    try {
    var site = new URLSearchParams(window.location.search).get("site");
    var category =  new URLSearchParams(window.location.search).get("category");
    var categoryElem = document.getElementById("category");
    var siteElem = document.getElementById("site");
    categoryElem.innerHTML = atob(category);
    siteElem.innerHTML = atob(site);
    } catch(err) {
        //Do nothing. This is for suppressing javascript errors.
    }
}

 document.addEventListener("DOMContentLoaded", function(event) {
      setInfo();
  });