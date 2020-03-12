/*
 * There are 2 types of validation
 * 
 * Client side and Server side
 * 
 * Server side validation is handled on the server after the form has been submitted. It cannot be bypassed. 
 * 
 * Client side validation is handled in the browser and can be bypassed. 
 * 
 * JavaScript validation is a great way to quickly let a user know if their input is valid. 
 * 
 * Common Validators 
 * -Required Validators: Specify that an HTML control must recieve input from a user
 * -Range Validators: Specify a certain range for user input
 * -Regular Expression Validators: These test an input string against a regular expression format. These are used for pattern matching (passwords, emails, phone numbers, zip codes, etc.)
 * 
 */

function validateForm(event) {
    //Gather all HTML controls into a collection instead of creating a seperate variable for each
    let controls = document.getElementsByClassName('form-control');
    console.log(controls);

    let validationMessages = document.getElementsByClassName('text-danger');
    console.log(validationMessages);

    //Regilar Expression object for Email
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    //Check the length of all controls - if any have NOT been filled out by the user, stop the form from submitting

    if (controls['name'].value.length == 0 || controls['email'].value.length == 0 || controls['subject'].value.length == 0 || controls['message'].value.length == 0 || !rxpEmail.test(controls['email'].value)) {
        //Stop the form from submitting
        event.preventDefault();

        //Check Individual controls and display the appropriate error message if needed

        //Name Validation
        if (controls['name'].value.length == 0) {
            validationMessages['rfvName'].textContent = "**Name is required**";

        }
        else {
            validationMessages['rfvName'].textContent = "";
        }
        //Email Validation

        //Length Validation
        if (controls['email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "**Email is required**";

        }
        else {
            validationMessages['rfvEmail'].textContent = "";
        }

        //Regular Expression Validation 
        if (!rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "**Please Provide a Valid Email**";

        }
        if (rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "";

        }
        //Subject Validation
        if (controls['subject'].value.length == 0) {
            validationMessages['rfvSubject'].textContent = "**Subject is required**";

        }
        else {
            validationMessages['rfvSubject'].textContent = "";
        }
        //Message Validation
        if (controls['message'].value.length == 0) {
            validationMessages['rfvMessage'].textContent = "**Message is required**";

        }
        else {
            validationMessages['rfvMessage'].textContent = "";
        }

    }
}