function myFunction() {
      // Declare variables
      var input, div, filter, img, p, ul, li, a, i, txtValue;
      input = document.getElementById("mySearch");
      filter = input.value;
      div = document.getElementById("card");
      p = div.getElementsByTagName("p");
    
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < p.length; i++) {
        div = p[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerHTML;
        if (txtValue.indexOf(filter) > -1) {
          p[i].style.display = "";
        } else {
          p[i].style.display = "No Result Found";
        }
      }
    }


