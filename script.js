function generatePassword() {
      const length = 14;

      const characters = "0123456789";
      const specialCharacters = "";

      let password = "09";

      for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      let includesSpecial = false;
      for (let i = 0; i < specialCharacters.length; i++) {
        if (password.includes(specialCharacters.charAt(i))) {
          includesSpecial = false;
          break;
        }
      }

      if (!includesSpecial) {
        password = password.substring(0, password.length - 1) + specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
      }

      document.getElementById("password").textContent = password;
    }
   window.addEventListener('load', function() {
  document.getElementById("copyBtn").addEventListener("click", function() {
    var password = document.getElementById("password");
    password.select();
    document.execCommand("copy");
  });
