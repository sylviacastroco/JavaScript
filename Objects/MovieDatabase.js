var movies = [
    { 
        hasWatched: true,
        title: "In Bruges",
        rating: "5"
    },
    {
         hasWatched: false,
        title: "Frozen",
        rating: "4.5"
    },
    {
         hasWatched: true,
        title: "Bumblebee",
        rating: "5"
    },
    {
         hasWatched: false,
        title: "Marvel",
        rating: "5"
    }
]

function buildString(movie){
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function(movie) {
    console.log(buildString(movie));
})
