$(function(){
    $('#on-button').on('click',function(){
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/fingerpalm-buzz/set/",
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
            url: "http://ecourse.cpe.ku.ac.th:1515/api/fingerpalm-buzz/set/",
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