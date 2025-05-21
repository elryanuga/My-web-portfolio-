My Web Portfolio Link: https://elryanuga.github.io/My-web-portfolio-/


Interactives:
1. Modal Popup for Project Details
   
When I click or press Enter/Space on a project card, a modal opens and displays the project’s title and description. This works by getting the project information from the projectDetails object using the card’s data-key, updating the modal content, and showing the modal by adding the active class. This interaction is triggered by the click and keydown events on each .project-card. For accessibility, pressing the Escape key will close the modal, and focus is trapped inside the modal using the Tab key to make keyboard navigation smooth. The modal can also be closed by clicking the close button or by clicking outside the modal area (on the overlay).

2.Contact Form Validation

When I submit the contact form, it checks if all the fields are properly filled in and if the email follows the correct format. The script validates the name, email, and message fields, and if any of them are empty or incorrect, it shows an error message below the respective input and a general warning message at the bottom of the form. This validation is triggered by the submit event of the form. To make sure the validation runs before anything else, I used e.preventDefault() to stop the form’s default submission. If everything is valid, it displays a thank-you message and resets the form to clear all the inputs.



