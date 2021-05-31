const notify = {
    EType: {
        SUCCESS: 'success',
        DANGER: 'danger',
        WARNING: 'warning'
    },
    push: (messenger, type) => {
        let icon;
        switch (type) {
            case notify.EType.SUCCESS:
                toastr.success(messenger);
                break;
            case notify.EType.DANGER:
                toastr.error(messenger);
                break;
            default:
                icon = 'fa fa-check';
                break;
        }
         
    },
    loading: () => {
        let html =
            `<div class="fade-loading" id='loading'>
                 <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                 <button type="button" id="closeLoading" class="close close-loading" data-dismiss="modal">&times;</button>
             </div>`;
        $('body').append(html);
    },
    done: () => {
        $('#loading').remove();
    }
};