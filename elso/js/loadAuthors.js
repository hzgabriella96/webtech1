$(document).ready(function() {
    $.getJSON("https://webtechlibrary.herokuapp.com/api/authors", function(data) {
        var table = $("#authorTable");
        $.each(data, function(key, value) {
            var row = $('<tr></tr>');

            var nameCell = $('<td>' + value.name + '</td>');
            var nationalityCell = $('<td>' + value.nationality + '</td>');
            var birthdateCell = $('<td>' + value.birthDate + '</td>');

            $(row).append(nameCell);
            $(row).append(nationalityCell);
            $(row).append(birthdateCell);

            $(table).append(row);
        })
    })
});