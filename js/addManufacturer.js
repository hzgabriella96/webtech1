$(document).ready(function() {
    var manufacturerForm = $("#manufacturers");
    console.log(manufacturerForm);
    manufacturerForm.submit(function(e) {
        e.preventDefault();
        console.log(e);
        console.log(this);
        var json = $(this).serializeArray();
        console.log(json[0].value);
        var obj = {
            name: json[0].value,
            country: json[1].value,
            founded: json[2].value,
        };
        console.log(obj);
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