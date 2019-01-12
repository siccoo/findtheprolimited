function myFunction() {
    // Declare variables
    var input, div, filter, img, p, txtValue;
    searchTerms = mySearch.value;
    input = document.getElementById("mySearch");
    filter = input.toUpperCase().value;
    div = document.getElementById("card");
    p = div.getElementsByTagName("p");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < p.length; i++) {
        div = p[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            p[i].style.display = "";
        } else {
            p[i].style.display = "No Result Found";
        }
    }
}

// Check browser support
if (typeof (Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}


