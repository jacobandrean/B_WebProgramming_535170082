const API_KEY = '4841093eb3de77f1f5ff7e957d634fa6'

var genres = {}
// retrieve all movie genres
$(() => {
    $.get(
        'https://api.themoviedb.org/3/genre/movie/list',
        { api_key: API_KEY }
    )
    .done((result) => {
        result.genres.forEach((genre) => {
            genres[genre.id] = genre.name
        })
    })
    .fail((error) => {
        alert(error.status_message)
    })
})

// search movie when the button is clicked
document.getElementById('searchButton').addEventListener('click', () => {

})

// search movie when the button is clicked
$('#searchButton').click((event) => {
    // clear error message
    $('#error').text('')

    // clear previous result from the table
    $('#result').empty()

    // request parameter
    const data = {
        api_key: API_KEY,
        query: $('#title').val()
    }

    // send GET request
    $.get('https://api.themoviedb.org/3/search/movie', data)
    .done((result) => {
        console.log
    })
    .fail((error) => {
        $('#error').text(`!!! ${error.status_mesage}`)
    })
})

function createMovieCell(movie) {
    var row = $('<tr></tr>')

    //row number
    const rowNumber = $('#result > tr').length + 1
    var colNumber = $('<td width="10"></td>')
    colNumber.append($('<h2 class="display-5></h2>').text(`#${rowNumber}`))
    rowNumber.append(colNumber)

    // poster
    const posterUrl = (movie.poster_path !== null) ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: ''
    var colPoster = $('<td width="100"></td>')
    colNumber.append($($(`<img src = "${posterUrl}" heigth="200">`))
    //rowNumber.append(colPoster)

    // title

    // overview

    // rating

    // genres

    return row
}