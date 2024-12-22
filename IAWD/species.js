function filterSpecies() {
    // Get the search input field and its value
    var input = document.getElementById("search");
    var filter = input.value.toLowerCase();
    
    // Get the table and rows
    var table = document.getElementById("specialTable");
    var tr = table.getElementsByTagName("tr");
    
    // Loop through all table rows, and hide those that don't match the search query
    for (var i = 1; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];  // Get the first column (Species Name)
        if (td) {
            var txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
