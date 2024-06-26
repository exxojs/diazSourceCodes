const codeDisplay = document.getElementById('code-display');
const toggleButton = document.getElementById('toggle-button');
const pageDropdown = document.getElementById('page-dropdown');
const copyButton = document.getElementById('copy-button');

const longCodePage1 = `

//Hi guys, I'm bored so I'll just code while eating haha
//This is a basic C++ Calculator hehe
#include <iostream>

using namespace std; //so I won't need to manually type std

int main() {
    //Let's set our variables... and name them properly
    int userChoice; //the user's choice will be an integer
    double nOne, nTwo, operationResult; //seems fair
    
    while (true) {
        //let's make the menu --- so it would be decent :)
        cout << "Hello! This is a C++ Calculator" << endl;
        cout << "===============================" << endl;
        cout << "Choose your desired operation: " << endl;
        cout << "1. Addition" << endl;
        cout << "2. Substraction" << endl;
        cout << "3. Multiplication" << endl; 
        cout << "4. Division" << endl;
        cout << "5. Exit program" << endl;
        cout << "Enter your choice: ";
        
        //let's take the user's input using cin
        cin >> userChoice; 
        //Now let's make the functions and statements; the user should be able to choose any operation so let's use "switch"
        switch (userChoice){
            case 1:
                cout << "Addition" << endl;
                cout << "Enter your first number: ";
                cin >> nOne;
                cout << "Enter your second number: ";
                cin >> nTwo;
                operationResult = nOne + nTwo;
                cout << "The sum is: "; 
                cout << operationResult << endl;
                break;
            case 2:
                cout << "Substraction" << endl;
                cout << "Enter your first number: ";
                cin >> nOne;
                cout << "Enter your second number: ";
                cin >> nTwo;
                operationResult = nOne - nTwo;
                cout << "The difference is: ";
                cout << operationResult << endl;
                break;
            case 3:
                cout << "Multiplication" << endl;
                cout << "Enter your first number: ";
                cin >> nOne;
                cout << "Enter your second number: ";
                cin >> nTwo;
                operationResult = nOne * nTwo;
                cout << "The product is: ";
                cout << operationResult << endl;
                break;
            case 4:
                cout << "Division" << endl; 
                cout << "Enter your first number: ";
                cin >> nOne;
                cout << "Enter your second number: ";
                cin >> nTwo;
                if (nTwo!= 0){
                operationResult = nOne / nTwo;
                cout << "The quotient is: ";
                cout << operationResult << endl;
                } else {
                    cout << "ERROR: Can't divide by zero" << endl;
                }
                break;
            case 5:
                cout << "Thank you for using the calculator!" << endl;
                return 0; // exit the program
            default:
                cout << "Invalid choice. Please try again. ";
        }
    }

    return 0;
}

`;

const longCodePage2 = `
//C++ code
// Define the motor pins
const int leftMotorForward = 5;    // Pin 9 for left motor forward
const int leftMotorBackward = 9;   // Pin 5 for left motor backward
const int rightMotorForward = 6;  // Pin 10 for right motor forward
const int rightMotorBackward = 10;  // Pin 6 for right motor backward

void setup() {
  // Set the motor pins as outputs
  pinMode(leftMotorForward, OUTPUT);
  pinMode(leftMotorBackward, OUTPUT);
  pinMode(rightMotorForward, OUTPUT);
  pinMode(rightMotorBackward, OUTPUT);
}

void loop() {
  // Spin clockwise
  analogWrite(leftMotorForward, 128);  // Set left motor forward to 50% power
  analogWrite(rightMotorForward, 0);  // Set right motor forward to 0 (off)
  analogWrite(leftMotorBackward, 0);  // Set left motor backward to 0 (off)
  analogWrite(rightMotorBackward, 128);  // Set right motor backward to 50% power
}
`;
  
const longCodePage3 = `
//C++ code

`;

toggleButton.addEventListener('click', () => {
  if (codeDisplay.style.display === 'none') {
    codeDisplay.style.display = 'block';
    toggleButton.textContent = 'Toggle Code';
  } else {
    codeDisplay.style.display = 'none';
    toggleButton.textContent = 'Toggle Code';
  }
});

pageDropdown.addEventListener('change', () => {
  switch (pageDropdown.value) {
    case 'page1':
      codeDisplay.textContent = longCodePage1;
      break;
    case 'page2':
      codeDisplay.textContent = longCodePage2;
      break;
    case 'page3':
      codeDisplay.textContent = longCodePage3;
      break;
    default:
      codeDisplay.textContent = '';
  }
});

copyButton.addEventListener('click', () => {
  const codeToCopy = codeDisplay.textContent;
  const textarea = document.createElement('textarea');
  textarea.value = codeToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Code copied to clipboard!');
});

codeDisplay.textContent = longCodePage1;

//===============================================
const button = document.querySelector('.change-image');
const image = document.querySelector('#changeable-image');
let imageIndex = 0;
const images = ['riptideSmall.webp', 'bronze.webp', 'silver.webp', 'gold.webp', 'diamond.webp'];

button.addEventListener('click', () => {
  imageIndex = (imageIndex + 1) % images.length;
  image.src = images[imageIndex];
});
