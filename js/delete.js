$(document).ready(function() {
    var carsForm = $("#cars");
    var manufacturersForm = $("#manufacturers");
    carsForm.submit(function(e) {
        e.preventDefault();
        console.log(e);
        console.log(this);
        var json = $(this).serializeArray();
        console.log(json[0].value);
        var obj = {
            _id: json[0].value,
        };
        console.log(obj);
        $.ajax({
                type: "DELETE",
                url: "https://webtechcars.herokuapp.com/api/cars/" + json[0].value,
                data: JSON.stringify(obj),
                contentType: "application/json",
            })
            .done(console.log)
            .fail(console.log);
    });

    manufacturersForm.submit(function(e) {
        e.preventDefault();
        var json = $(this).serializeArray();
        console.log(json[0].value);
        var obj = {
            _id: json[0].value,
        };
        console.log(obj);
        $.ajax({
                type: "DELETE",
                url: "https://webtechcars.herokuapp.com/api/manufacturers/" + json[0].value,
                data: JSON.stringify(obj),
                contentType: "application/json",
            })
            .done(console.log)
            .fail(console.log);
    });
});