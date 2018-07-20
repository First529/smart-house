$(function () {
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://exceed.srakrn.me/api/jacky-group/view",
            dataType: "text",
            success: function (response) {
                let clenced = response
                    .replace(/&/g, '&amp;')
                    .replace(/&/g, '&lt;')
                    .replace(/&/g, '&quot;');

                $('#result').html(`
            <h1>${response}</h1>
            `)

            },
            fail: function (response) {
                console.log(response)
            }
        });
    }, 3000)

    $('#send-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://exceed.srakrn.me/api/jacky-group/set",
            data: {
                value: $('#text-input').val()
            },
            dataType: "่json",
            success: function (response) {
                console.log(response)
            }
        });
    })
})