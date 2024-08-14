document.getElementById("userForm").addEventListener("submit",async function(event){
    event.preventDefault();
      const name = document.getElementById('name').value;
      const password = document.getElementById('password').value;
  
      try{
        const response=await fetch("http://localhost:5000/log-in",
          {
            method:"POST",
            mode:"cors",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,password}),
          });
          const val=await response.json();
          console.log(val);
         
     if (response.ok) {
        // Redirect to the cards page on successful registration
        window.location.href = 'home.html'; 
      } else {
        // Handle error, for example, display an error message
        console.error(result.error);
      }
      }
      
    
      catch(error){
        console.log(error);
      }
      finally{
        console.log("Successfully Connected");
      }
      console.log(name,email,password)
    
      
     });
      

     
 document.addEventListener('DOMContentLoaded', () => {
  const passwordField = document.getElementById('password');
  const showPasswordCheckbox = document.getElementById('showPassword');

  showPasswordCheckbox.addEventListener('change', () => {
      if (showPasswordCheckbox.checked) {
          passwordField.type = 'text';
      } else {
          passwordField.type = 'password';
      }
  });
});

  
  