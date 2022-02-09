$(document).ready( () => {
    $('div#add_item').on('click', () => {
	$('ul.my_list').append('<li>item</li>');
    });

    $('div#remove_item').on('click', () => {
	$('ul.my_list li:last-child').remove();
    });

    $('div#clear_list').empty();
});
});
