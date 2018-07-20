$(function(){
    $('#on-button').on('click',function(){
        $.ajax({
            type: "POST",
            url: "http://exceed.srakrn.me/api/fingerpalm-buzz/set/",
            data: {
                value:"1"
            },
            dataType: "json",
            success: function (response) {
                console.log(response)
            }
        });
    })

    $('#off-button').on('click',function(){
        $.ajax({
            type: "POST",
            url: "http://exceed.srakrn.me/api/fingerpalm-buzz/set/",
            data: {
                value:"0"
            },
            dataType: "json",
            success: function (response) {
                console.log(response)
            }
        });
    })
})