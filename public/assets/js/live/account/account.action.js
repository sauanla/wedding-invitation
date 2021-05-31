function login() {
  notify.loading();
  $.ajax({
    type: 'POST',
    url: '/manager/account/login',
    dataType: 'json',
    data: {
      username: $('#username').val(),
      password: $('#password').val(),
      'g-recaptcha-response': $('#recaptcha').val(),
    },
    success: function (response) {
      if (response.success) {
        notify.push("Login success", notify.EType.SUCCESS);
        var rtUrl = $('#rtUrl').val();
        if (rtUrl === '' || rtUrl === undefined) {
          rtUrl = '/manager/invitation';
        }
        setTimeout(function () {
          window.location.href = rtUrl;
        }, 1000);
      } else {
        notify.done();
        notify.push(response.messageList[0].text, notify.EType.DANGER);
      }
    },
    error: (jqXHR, textStatus) => {
      let mess = 'Request failed: ' + textStatus;
      notify.done();
      notify.push(mess, notify.EType.DANGER);
    },
  });
}

$(document).ready(function () {
  $('input').keypress(function (e) {
    if (e.which === 13) {
      e.preventDefault();
      login();
      return false;
    }
  });
  $('#btnLogin').click(function (e) {
    e.preventDefault();
    login();
  });
});
