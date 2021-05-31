function sendResponse() {
  const invocation = {
    name: $('#txtName').val(),
    inviteeId: $('#txtId').val(),
    message: $('#txtMessage').val(),
    phone: $('#txtPhone').val(),
    status: $('#slStatus').val(),
  };
  notify.loading();
  $.ajax({
    type: 'POST',
    url: '/invocation', 
    data: {
      invocation: invocation,
      'g-recaptcha-response': $('#recaptcha').val(),
    },
    success: function (response) {
      if (response.success) {
        notify.push('Success', notify.EType.SUCCESS);

        setTimeout(function () {
          window.location.href = '/invitation/'+ response.data.id;
        }, 2000);
      } else {
        notify.done();
        const msg = (response.messageList && response.messageList.length > 0) ? response.messageList[0].text: "Erros";
        notify.push(msg, notify.EType.DANGER);
      }
    },
    error: (request, jqXHR, textStatus) => {
      let mess = 'Request failed: ' + textStatus;
      notify.done();
      notify.push(request.responseJSON.error, notify.EType.DANGER);
    },
  });
}

$(document).ready(function () {
  $('input').keypress(function (e) {
    if (e.which === 13) {
      e.preventDefault();
      sendResponse();
      return false;
    }
  });
  $('#btnSend').click(function (e) {
    e.preventDefault();
    sendResponse();
  });
});

function onSubmit(token) {
  document.getElementById("frmSendRp").submit();
}