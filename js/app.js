window.onload = init;

function init() {
  const errorImage = '<img src="./css/images/alert.png" width="25em" class="error" alt="alert">';
  const tick       = '<img src="./css/images/tick.png" width="40em" class="tick" alt="success">';
  let proceed      = true;

  $('.disable').click(function(e) {
    e.preventDefault();
  });

  $('#submit').click(function() {
    validateForm();
  });

  function validateForm() {
    $('.tick').remove();
    proceed = true;
    validateFields();
    if (proceed === true) {
      validateEmail();
      validatePhoneNumber();
      validatePassword();
      if (proceed === true) {
        $('#submit').after(tick);
      }
    }
  }

  function validateFields() {
    $('.error').remove();
    for (let i = 0; i < $('input').length; i++) {
      const $input = $('input')[i];
      const $str   = $input.value.replace(/\s+/g, ' ').trim();
      $input.value = $str;
      if ($str.length === 0) {
        $input.placeholder = 'Field Required';
        $($input).after(errorImage);
        proceed = false;
      }
    }
  }

  function validateEmail() {
    if ($('.email')[0].nextSibling) {
      $('.email')[0].nextSibling.remove();
    }
    const $email = $('.email')[0];
    const reg    = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test($email.value) === false) {
      $('.email')[0].value       = '';
      $('.email')[0].placeholder = 'Enter Valid Email';
      $('.email').after(errorImage);
      proceed = false;
    }
  }

  function validatePhoneNumber() {
    if ($('.phone')[0].nextSibling) {
      $('.phone')[0].nextSibling.remove();
    }
    const $phoneNum  = $('.phone')[0].value;
    const reg        = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (reg.test($phoneNum) === false) {
      $('.phone')[0].value       = '';
      $('.phone')[0].placeholder = 'Enter Valid Phone Number';
      $('.phone').after(errorImage);
      proceed = false;
    }
  }


  function validatePassword() {
    if ($('.password')[0].nextSibling) {
      $('.password')[0].nextSibling.remove();
      $('.password')[1].nextSibling.remove();
    }
    if ($('.password')[0].value !== $('.password')[1].value) {
      $('.password')[1].value       = '';
      $('.password')[1].placeholder = 'Passwords Do Not Match';
      $('.password').after(errorImage);
      proceed = false;
    }
  }
}
