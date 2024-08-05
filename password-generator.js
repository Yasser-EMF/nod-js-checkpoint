// password-generator.js

const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10, // Password length
    numbers: true, // Include numbers
    symbols: true, // Include symbols
    uppercase: true, // Include uppercase letters
    lowercase: true, // Include lowercase letters
    strict: true // Enforce strict rules (at least one of each type)
  });

  console.log(`Generated Password: ${password}`);
}

// Call the function
generateRandomPassword();
