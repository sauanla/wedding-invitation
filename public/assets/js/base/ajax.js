"use strict";


const ajax = {
    createOrUpdate: (_url, _data, _successCallBack, _errorCallBack) => {
        $.ajax({
            type: 'POST',
            url: _url,
            dataType: 'json',
            data: _data,
            success: _successCallBack,
            error: _errorCallBack,
            cache: false,
            contentType: false,
            processData: false
        });
    },
    createOrUpdateByJson: (_url, _data, _successCallBack, _errorCallBack) => {
        $.ajax({
            type: 'POST',
            url: _url,
            dataType: 'json',
            data: _data,
            contentType: "application/json; charset=utf-8",
            success: _successCallBack,
            error: _errorCallBack,
            cache: false
        });
    },
    get: (_url, _data, _successCallBack, _errorCallBack) => {
        $.ajax({
            type: 'GET',
            url: _url,
            dataType: 'json',
            data: _data,
            success: _successCallBack,
            error: _errorCallBack
        });
    },
    post: (_url, _data, _successCallBack, _errorCallBack) => {
        $.ajax({
            type: 'POST',
            url: _url,
            dataType: 'json',
            data: _data,
            success: _successCallBack,
            error: _errorCallBack
        });
    },
    del: (_url, _data, _successCallBack, _errorCallBack) => {
        $.ajax({
            type: 'POST',
            url: _url,
            dataType: 'json',
            data: _data,
            success: _successCallBack,
            error: _errorCallBack
        });
    }
};
