const  passwordBox = document.getElementById('password');
const copy = document.getElementById(`copy`);
const button = document.getElementById(`btn`);
const lenght = 12;

const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const lowerCase = `abcdefghijklmnopqrstuvwxyz`;
const number = `0123456789`;
const symbols = `!@#$%^&*(){}?/<>.<|=+-`;

const allChars = upperCase + lowerCase + number + symbols;

button.addEventListener(`click`,()=>{
   let password = ``; 
   password += upperCase[Math.floor(Math.random()* upperCase.length)];
   password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
   password += number[Math.floor(Math.random()* number.length)];
   password += symbols[Math.floor(Math.random()* symbols.length)];

   while(lenght > password.length){
    password += allChars[Math.floor(Math.random()* allChars.length)];
   }

   passwordBox.value = password;
});

copy.addEventListener(`click`,()=>{
    passwordBox.select();
    document.execCommand(`copy`);
});




