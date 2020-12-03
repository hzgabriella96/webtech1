$(document).ready(function() {
    var carForm = $("#cars");
    console.log(carForm);
    carForm.submit(function(e) {
        e.preventDefault();
        console.log(e);
        console.log(this);
        var json = $(this).serializeArray();
        console.log(json);
        var obj = {
            name: json[0].value,
            consumption: json[1].value,
            color: json[2].value,
            manufacturer: json[3].value,
            avaiable: json[4].value,
            year: json[5].value,
            horsepower: json[6].value,
        };
        console.log(obj);
        $.ajax({
                type: "POST",
                url: "https://webtechcars.herokuapp.com/api/cars",
                data: JSON.stringify(obj),
                contentType: "application/json",
            })
            .done(console.log)
            .fail(console.log);
    });
});