function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation: check if fields are not empty
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('All fields must be filled out');
      return false;
    }
  
    // Validate email using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    // Password length should be at least 8 characters
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return false;
    }
  
    // All validations passed, form can be submitted
    alert('Form submitted successfully!');
    return true;
  }
  