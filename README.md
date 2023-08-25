# PasswordGenerator
A practical tool that allows employees to generate strong, random passwords based on selected criteria.

## Description
The Password Generator is a web-based application developed to assist employees in generating strong, random passwords. Using a combination of HTML, CSS, and JavaScript, it presents a user-friendly interface where the user can specify various criteria to customize their password.
## App in Action
### Prompts
#### Password Length
![Password Length](/Assets/Prompt1.png)
#### Lowercase
![Lowercase](/Assets/Prompt2.png)
#### Uppercase
![Uppercase](/Assets/Prompt3.png)
#### Numbers
![Numbers](/Assets/Prompt4.png)
#### Special Characters
![Special Characters](/Assets/Prompt5.png)

### Result
![Result](/Assets/Result.png)

## Features:
Selection of password length: Users can specify the desired length of their password (between 8 to 128 characters).

### Customizable character types: The application provides the flexibility to include:

* Lowercase letters
* Uppercase letters
* Numeric characters
* Special characters (like $, @, %, &, *, etc.)
* Instant password generation: On confirming the desired criteria, a password is instantly generated and displayed on the screen.

* Input validation: The application ensures that the input provided by users is valid and at least one character type is selected for the password generation.

* Responsive design: The app's design is responsive, ensuring a consistent experience across various screen sizes.

## Sample Code Snippets
### Character arrays used for password generation:

#### JS #1
  ```
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', ...];
var numericCharacters = ['0', '1', '2', '3', ...];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', ...];
var upperCasedCharacters = ['A', 'B', 'C', 'D', ...];

  ```
#### JS #2
  ```
  Function to get password options from the user:
function getPasswordOptions() {

  // Check the desired character types
  if (confirm("Do you want lowercase characters?")) {
      selectedChars = selectedChars.concat(lowerCasedCharacters);
  }
  ...
  return {
      length: length,
      characters: selectedChars
  };
}

```
#### JS #3
```
Function to generate the password:
function generatePassword() {
  var options = getPasswordOptions();
  ...
  for (var i = 0; i < options.length; i++) {
      password += getRandom(options.characters);
  }
  return password;
}
```
## Links
Live Application: [Password Generator Website](https://bh1ff.github.io/PasswordGenerator)

Repository: [GitHub Repository](https://github.com/bh1ff/PasswordGenerator)

Getting Started
To utilize this application, simply navigate to the provided website link. From there, you'll be able to specify your desired password criteria and generate your password.

Feedback & Contribution
Feedback is always appreciated. If you'd like to contribute or suggest changes, please fork the repository and create a pull request. We are always looking for ways to improve and make this tool even better!

Made with ❤ by bh1ff.