export function validateFormData(email, password, name="", isSignUp){
const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isPasswordValid = regex.test(password); 
const isNameValid = /.{4,}/.test(name);

if(isSignUp && !isNameValid) return "Enter a valid user name"
if(!isEmailValid) return "Email is not valid";
if(!isPasswordValid) return "Password is not valid";


return null;
}