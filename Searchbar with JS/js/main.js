function mySearchFunction() {
  // Declare  all variables by let attrb.
  let input, filter, ul, li, item,  txtValue;
 
  input = document.getElementById("myInput");
  // Filter,makes in search values  case sensitive
  filter = input.value.toUpperCase();
    
    
  // select ul by id value
  ul = document.getElementById("countries");
  
    // Individual item on list
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query :)
  for (let i = 0; i < li.length; i++) {
    item = li[i];
    txtValue = item.textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    // Displays list items that are a match, and nothing if no match
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
