$(function () {
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/finger-door/view/",
            dataType: "text",
            success: function (response) {
                //     let clenced = response
                //         .replace(/&/g, '&amp;')
                //         .replace(/&/g, '&lt;')
                //         .replace(/&/g, '&quot;');

                //     $('#result').html(`
                // <h1>${response}</h1>
                // `)
                console.log(response)

            },
            fail: function (response) {
                console.log(response)
            }
        });
    }, 1000)

    $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/finger-door/set/",
        data: {
            value: "5135"
        },
        dataType: "json",
        success: function (response) {
            
                console.log(response)
            }
        });

})
