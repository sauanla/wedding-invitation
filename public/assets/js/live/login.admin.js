function login() {
    notify.loading();
    $.ajax({
        type: 'POST',
        url: '/admin/login/checkLogin',
        dataType: 'json',
        data: { userName: $('#Username').val(), passWord: $('#Password').val() },
        success: function (response) {
            if (response.status) {
                notify.push(response.mess, notify.EType.SUCCESS);
                var rtUrl = $('#rtUrl').val();
                if (rtUrl === "" || rtUrl === undefined) {
                    rtUrl = "/Admin";
                }
                setTimeout(function () {
                    window.location.href = rtUrl;
                }, 3000);
            } else {
                notify.done();
                notify.push(response.mess, notify.EType.DANGER);
            }
        },
        error: (jqXHR, textStatus) => {
            let mess = "Request failed: " + textStatus;
            notify.done();
            notify.push(mess, notify.EType.DANGER);
        }
    });
};
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