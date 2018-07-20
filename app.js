$(function () {
    // setInterval(function () {
    //     $.ajax({
    //         type: "GET",
    //         url: "http://ecourse.cpe.ku.ac.th:1515/api/{key}/view/",
    //         dataType: "text",
    //         success: function (response) {
    //             let clenced = response
    //                 .replace(/&/g, '&amp;')
    //                 .replace(/&/g, '&lt;')
    //                 .replace(/&/g, '&quot;');

    //             $('#result').html(`
    //         <h1>${response}</h1>
    //         `)

    //         },
    //         fail: function (response) {
    //             console.log(response)
    //         }
    //     });
    // }, 1000)

    $("#button1").onclick(function () {
        $.post("http://ecourse.cpe.ku.ac.th:1515/api/light/set/", 0 , function (response) {
            console.log("iceefrr");
        });

    })



})
