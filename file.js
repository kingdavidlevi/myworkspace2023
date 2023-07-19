let firstname;
let middlename;
let lastname;
let email;
let phonenumber;
let password;


document.getElementById("submit").onclick = () => {


    firstname = document.getElementById("firstName").value;
    if (firstname == ""){
      alert('fill in input')
    }
    
   console.log(firstname);

   middlename = document.getElementById("middleName").value;
   console.log(middlename);

   lastname = document.getElementById("lastName").value;
   console.log(lastname);

   email = document.getElementById("email").value;
   
   console.log(email);

    phonenumber = document.getElementById("telephone").value;
    phonenumber = Number(phonenumber)
    console.log(phonenumber);

   password = document.getElementById("password").value;
   password = Number(password);
   console.log(password);

  
  if (document.getElementById("male").checked){
    let option1 = document.getElementById("male").value;
    console.log(option1);

  }
  else if (document.getElementById("female").checked){
    let option2 = document.getElementById("female").value;
    console.log(option2);

  }
  else {
    alert("please select an option");

  }
   

 




}
