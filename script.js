$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      var name    = document.getElementById('name')
      var email   = document.getElementById('email')
      var message = document.getElementById('msg')
      var number  =document.getElementById('number')
      var place   =document.getElementById('place')
  
      if (!name.value || !email.value || !message.value || !number || !place) {
        alertify.error("Please check your entries");
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/fahisccc3@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success("Message sent");
      }
    });
  });