$(document).ready(function () {
    var urlSplit = window.location.pathname.split('/');
    if (urlSplit.length == 4) {
        $('#menu-' + urlSplit[2]).addClass('active-sub active');
    } else {
        $('#menu-Dashboard').addClass('active-sub active');
    }
});