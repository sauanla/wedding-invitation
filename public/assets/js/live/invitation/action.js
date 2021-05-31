//mở ra và check trạng thái
function openModal(isEdit, id) {
  if (!!isEdit) {
    getData(id);
  } else {
    $('#myModal').modal('show');
    $('#txtId').val(null);
    $('#txtName').val('');
    $('#txtLevel').val("Vợ chồng");
    $('#txtMessage').val('');
    $('#slArea').val('1');
  }
}

function saveData() {
  const isEdit = $('#IsEdit').val();
  if (!!isEdit) {
    updateInvitee();
  } else {
    createInvitee();
  }
}

//Thêm dữ liệu
function createInvitee() {
  notify.loading();
  const invitee = {
    name: $('#txtName').val(),
    message: $('#txtMessage').val(),
    level: $('#txtLevel').val(),
    area: $('#slArea').val(),
  };


  $.ajax({
    url: '/manager/invitation/create',
    data: { invitee: invitee },
    type: 'POST',
    success: function (data) {
      if (data.success) {
        $('#exampleModal').modal('hide');
        notify.push(data.message, notify.EType.SUCCESS);
        setTimeout(function () {
          window.location.reload();
          notify.done();
        }, 500);
      } else {
        $('#exampleModal').modal('hide');
        notify.push(data.success, notify.EType.DANGER);
        setTimeout(function () { 
          notify.done();
        }, 2000);
      }
    },
    error: function (request, msg, error) {
      notify.done();
      notify.push(request.responseJSON.error, notify.EType.DANGER);
    },
  });
}

//cập nhật dữ liệu
function updateInvitee() {
  const invitee = {
    id: $('#txtId').val(),
    name: $('#txtName').val(),
    message: $('#txtMessage').val(),
    level: $('#txtLevel').val(),
    area: $('#slArea').val(),
  };
  notify.loading();

  $.ajax({
    url: '/manager/invitation/update',
    data: {
      invitee: invitee
    },
    type: 'PUT',
    success: function (response) {
      if (response.success) {
        $('#exampleModal').modal('hide');
        notify.push("Success", notify.EType.SUCCESS);
        setTimeout(function () {
          window.location.reload();
          notify.done();
        }, 500);
      } else {
        $('#exampleModal').modal('hide');
        const msg = (response.messageList && response.messageList.length > 0) ? response.messageList[0].text: "Erros";
        notify.push(msg, notify.EType.DANGER);
        setTimeout(function () {
          notify.done();
        }, 2000);
      }
    },
    error: function (request, msg, error) {
      notify.done();
      notify.push(request.responseJSON.error, notify.EType.DANGER);
    },
  });
}

//lấy dữ liệu điền lên
function getData(id) {
  $.get(`/manager/invitation/${id}/detail`)
    .done(function (rp) {
      if (rp.success) {
        const data = rp.data;
        $('#txtId').val(data._id);
        $('#txtName').val(data.name);
        $('#txtMessage').val(data.message);
        $('#txtLevel').val(data.level);
        $('#slArea').val(data.area);
        $('#myModal').modal('show');
        $('#IsEdit').val(true);
        $('#txtId').val(id);
      } else {
        console.log('K lay dc du lieu');
      }
    });
}

function del(id) {
  notify.loading();

  $.ajax({
    url: '/manager/invitation/delete',
    data: { id },
    type: 'DELETE',
    success: function (response) {
      // Do something with the result
      if (response.success) {
        notify.push("Success", notify.EType.SUCCESS);
        setTimeout(function () {
          window.location.reload();
          notify.done();
        }, 500);
      } else {
        const msg = (response.messageList && response.messageList.length > 0) ? response.messageList[0].text: "Erros";
        notify.push(msg, notify.EType.DANGER);
        setTimeout(function () { 
          notify.done();
        }, 2000);
      }
    },
  });
}
