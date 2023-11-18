function validateForm() {
  var phoneNumber = document.getElementById('phoneNumber').value;
  var errorDiv = document.createElement('div');
  
  
  if (phoneNumber.trim() === '') {
    errorDiv.innerHTML = 'Phone number cannot be blank.';
    document.getElementById('newsletterForm').appendChild(errorDiv);
    return false;
  }
  
  var phoneRegex = /^[0-9-]+$/;
  if (!phoneRegex.test(phoneNumber)) {
    errorDiv.innerHTML = 'Phone number can only contain numbers and dashes.';
    document.getElementById('newsletterForm').appendChild(errorDiv);
    return false;
  }
  
  var sanitizedPhoneNumber = phoneNumber.replace(/[^\d-]/g, '');
  document.getElementById('phoneNumber').value = sanitizedPhoneNumber;
  
  return true;
}
