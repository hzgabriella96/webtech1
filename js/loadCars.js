$(document).ready(function() {
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data) {
        console.log(data);
        var table = $("#carsTable");
        $.each(data, function(key, value) {
            var row = $("<tr></tr>");
            var idCell = $("<td>" + value._id + "</td>");
            var nameCell = $("<td>" + value.name + "</td>");
            var consumptionCell = $("<td>" + value.consumption + "</td>");
            var colorCell = $("<td>" + value.color + "</td>");
            var manufacturerCell = $("<td>" + value.manufacturer + "</td>");
            var avaiableCell = $("<td>" + value.avaiable + "</td>");
            var yearCell = $("<td>" + value.year + "</td>");
            var horsepowerCell = $("<td>" + value.horsepower + "</td>");
            $(row).append(idCell);
            $(row).append(nameCell);
            $(row).append(consumptionCell);
            $(row).append(colorCell);
            $(row).append(manufacturerCell);
            $(row).append(avaiableCell);
            $(row).append(yearCell);
            $(row).append(horsepowerCell);
            $(table).append(row);
        });
    });
    var carFrom = $("#cars");
    console.log(carFrom);
    carFrom.submit(function(e) {
        e.preventDefault();
        console.log(e);
        console.log(this);
        var json = $(this).serializeArray();
        console.log(json);
        var obj = {
            name: json[1].value,
            consumption: json[2].value,
            color: json[3].value,
            manufacturer: json[4].value,
            avaiable: json[5].value,
            year: json[6].value,
            horsepower: json[7].value,
        };
        console.log(obj);
        $.ajax({
            type: "DELETE",
            url: "https://webtechcars.herokuapp.com/api/cars/" + json[0].value,
            data: JSON.stringify(obj),
            contentType: "application/json",
        })
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