
 function showTelegramLink() {
   $('#loadingModal').hide();
   $('#telegramLinkModal').show();
 }

 function validateAndSubmit() {
   // Basic form validation
   var name = $('input[name="name"]').val();
   var email = $('input[name="email"]').val();

   // Reset previous error styles
   $('input').removeClass('mandatory-field');
   $('#errorMessage').text('');

   if (!name || !email) {
     $('#errorMessage').text('All fields must be filled.');
     // Highlight mandatory fields
     $('input[name="name"], input[name="email"]').addClass('mandatory-field');
     return;
   }

   // Display loading GIF Modal
   $('#loadingModal').show();

   // Simulate processing and display Telegram link Modal after a delay
   setTimeout(function () {
     $('#registrationForm').submit();
     showTelegramLink();
   }, 3000); // Adjust the delay as needed
 }

 $(document).ready(function () {
   $('select[name="college_type"]').change(function () {
     $('.conditional-fields').hide();
     $('#' + $(this).val()).show();
   });

   $('select[name="college_type"]').change();

   $('select[name="working"]').change(function () {
     if ($(this).val() === "Yes") {
       $('#workingYesFields').show();
     } else {
       $('#workingYesFields').hide();
     }
   });
 });
