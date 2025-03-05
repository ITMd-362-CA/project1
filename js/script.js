function checkForm() {
  /*
  Do not need the value of the previous platform since some users may 
  not have a previous platform so this is not a required field
  */
  //Constants to check required form input values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  
  //Simple validation checking
  if (firstName === "" || lastName === "" || email === "") {
    alert("Please fill out all the required fields (First & Last name and Email)");
	return false; //This is needed to prevent form submission
  }

  return true; //This is needed to allow form submission if all required fields are filled
}