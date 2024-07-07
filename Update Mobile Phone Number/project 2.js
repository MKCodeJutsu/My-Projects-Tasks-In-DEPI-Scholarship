

// Create an empty array to store phone numbers
var phoneNumbers = [];

function addPhoneNumber() {
  // Get the value entered by the user
  var phoneNumber = document.getElementById("phoneNumberInput").value;

  // Validate the phone number format
  var validPrefixes = ["010", "011", "012", "015"];
  var isValid = validPrefixes.some(prefix => phoneNumber.startsWith(prefix));
  
  if (!isValid) {
    alert("Phone number must start with 010, 011, 012, or 015");
    return;
  }

  // Check if the phone number has 10 or 11 digits
  if (phoneNumber.length === 10 || phoneNumber.length === 11) {
    // Check if the phone number needs to be updated
    if (phoneNumber.length === 10) {
      // Extract the first three digits 
      let firstThreeDigits = phoneNumber.substring(0, 3);

      // Check if the first three digits match the pattern and update if needed
      switch (firstThreeDigits) {
        case "010":
          phoneNumber = phoneNumber.replace(firstThreeDigits, "0100");
          break;
        case "011":
          phoneNumber = phoneNumber.replace(firstThreeDigits, "0111");
          break;
        case "012":
          phoneNumber = phoneNumber.replace(firstThreeDigits, "0122");
          break;
        case "015":
          phoneNumber = phoneNumber.replace(firstThreeDigits, "0155");
          break;
      }
    }
   
    


    // Add the value to the array
    phoneNumbers.push(phoneNumber);
    console.log(phoneNumbers);

    // Clear the input field
    document.getElementById("phoneNumberInput").value = "";
  } else {
    // Prompt the user to enter a valid mobile number
    alert("Please enter a valid mobile number with 10 or 11 digits.");
  }
  // Call savePhoneNumbers to save phone numbers to external text document
  savePhoneNumbers(phoneNumbers);
}

function displayPhoneNumbers() {
  var phoneNumberList = document.getElementById("phoneNumberList");
  
  // Clear previous content
  phoneNumberList.innerHTML = "";

  // Loop through the array and display each phone number
  phoneNumbers.forEach(function(number) {
    var phoneNumberItem = document.createElement("p");
    phoneNumberItem.textContent = number;
    phoneNumberList.appendChild(phoneNumberItem);
  });
}

// Add this function to your existing code
function savePhoneNumbersToFile() {
  // Convert the phoneNumbers array to a string
  var phoneNumbersString = phoneNumbers.join("\n"); // Each number on a new line

  // Create a Blob (binary large object) from the string
  var blob = new Blob([phoneNumbersString], { type: "text/plain" });

  // Create a URL for the Blob
  var url = URL.createObjectURL(blob);

  // Create a link to download the file
  var link = document.createElement("a");
  link.href = url;
  link.download = "phone_numbers.txt"; // Set the desired filename
  link.click();

  // Clean up the URL
  URL.revokeObjectURL(url);
}