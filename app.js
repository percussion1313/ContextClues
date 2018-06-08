$(document).ready(function () {
    var friends = ['Dee', 'Dennis', 'Charlie', 'Frank', 'Pondy'];
    var locations = ['Pub', 'Aparment', 'School', 'Hospital', 'Bathroom', 'Closet', 'Ditch', 'Hospital', 'Top Golf', 'News Room'];
    var weapons = ['Cheesegrater', 'Hockey Puck', 'Stabby Thing', 'Coffee Mug', 'Beer Bottle', 'Kitten Mittons', 'Rubber Glove', 'Sticky Thing', 'Toothbrush', 'iPhone X', 'Popcorn Bucket', 'Door Handle', 'Electic Plug', 'Furnace', 'Plush Animal', 'Mirror', 'Comforter', 'Duster', 'Spoon', 'Piece of Construction Paper'];

    for (var i = 1; i <= 100; i++) {
        var h3 = $(`<h3>Accusation ${i}</h3>`)
        $(h3).appendTo('body');


        $(h3).click(accuseSomeone(i));

        function accuseSomeone(i) {
            return function () {
                alert(`Accusation ${i}: I accuse ${friends[i % 5]} with the ${weapons[i % 20]} in the ${locations[i % 10]}`);
            }
        }
    }
})


