const validator = {
    faIcon: {
        valid: 'fa fa-check-circle fa-lg text-success',
        invalid: 'fa fa-times-circle fa-lg',
        validating: 'fa fa-refresh'
    },
    valid: (formid, _fields, _callBack) => {
        $(`#${formid}`).bootstrapValidator({
            message: 'This value is not valid',
            excluded: [':disabled'],
            feedbackIcons: this.faIcon,
            fields: _fields
        }).on('success.form.bv', _callBack);
    }
};