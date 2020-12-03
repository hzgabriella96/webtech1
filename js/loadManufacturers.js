$(document).ready(function() {
    $.getJSON(
        "https://webtechcars.herokuapp.com/api/manufacturers",
        function(data) {
            console.log(data);
            var table = $("#manufacturerTable");
            $.each(data, function(key, value) {
                var row = $("<tr></tr>");
                var idCell = $("<td>" + value._id + "</td>");
                var nameCell = $("<td>" + value.name + "</td>");
                var countryCell = $("<td>" + value.country + "</td>");
                var foundedCell = $("<td>" + value.founded + "</td>");
                $(row).append(idCell);
                $(row).append(nameCell);
                $(row).append(countryCell);
                $(row).append(foundedCell);
                $(table).append(row);
            });
        }
    );
    var manufacturerForm = $("#manufacturers");
    console.log(manufacturerForm);
    manufacturerForm.submit(function(e) {
        e.preventDefault();
        console.log(e);
        console.log(this);
        var json = $(this).serializeArray();
        console.log(json[0].value);
        var obj = {
            name: json[1].value,
            country: json[2].value,
            founded: json[3].value,
        };
        console.log(obj);
        $.ajax({
            type: "DELETE",
            url: "https://webtechcars.herokuapp.com/api/manufacturers/" + json[0].value,
            data: JSON.stringify(obj),
            contentType: "application/json",
        });
        $.ajax({
                type: "POST",
                url: "https://webtechcars.herokuapp.com/api/manufacturers",
                data: JSON.stringify(obj),
                contentType: "application/json",
            })
            .done(console.log)
            .fail(console.log);
    });
});