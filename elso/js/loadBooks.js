$(document).ready(function() {
    $.getJSON("https://webtechlibrary.herokuapp.com/api/books", function(data) {
        var table = $("#bookTable");
        $.each(data, function(key, value) {
            var row = $('<tr></tr>');

            var titleCell = $('<td>' + value.title + '</td>');
            var authorCell = $('<td>' + value.author + '</td>');
            var genreCell = $('<td>' + value.genre + '</td>');
            var quantityCell = $('<td>' + value.quantity + '</td>');
            var availableCell = $('<td>' + value.available + '</td>');
            var publisherCell = $('<td>' + value.publisher + '</td>');

            $(row).append(titleCell);
            $(row).append(authorCell);
            $(row).append(genreCell);
            $(row).append(quantityCell);
            $(row).append(availableCell);
            $(row).append(publisherCell);

            $(table).append(row);
        })
    })
});