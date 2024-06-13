// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map(movies=> movies.director)
}
console.log(getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Return 0 if the input is not an array or if it's an empty array
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0){
        return 0
}
 // Return the count of Spielberg's drama movies
let spielbergDramas = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
)
return spielbergDramas.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// Return 0 if the input is not an array or if it's an empty array
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
// Sum of the scores

 let sumOfScores = 0
 moviesArray.forEach(movie=> { 
    sumOfScores += movie.score || 0
 } )  
 // Average of the scores
 let averageScore = sumOfScores / moviesArray.length
  // rounding up to 2 decimals using Math method 
 averageScore = Math.round(averageScore*100)/100

 return averageScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    //Score of Drama movies
    let dramaMovies =  moviesArray.filter(movie=> movie.genre.includes("Drama"))

    if (dramaMovies.length === 0){
        return 0
    }

     //sum of Drama scores
    let sum = dramaMovies.reduce((total, current) => total + current.score, 0)
        
    //Average of DramaScore
    let averageOfDramaScore = sum / dramaMovies.length
    
    //rounding up to 2 decimals using Math method
    averageOfDramaScore = Math.round(averageOfDramaScore*100)/100
    return averageOfDramaScore

}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
//Copying the array
    let copiedmoviesArray = [...moviesArray]
    
//sorting the movies according to title if they are of the same year and then the rest of them are sorted based on the Year    
    copiedmoviesArray.sort((a,b)=>  {if(a.year === b.year) {

    return a.title.localeCompare(b.title)         

    } return(a.year-b.year)})

    return copiedmoviesArray
}
    
 
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    //Copying the array
    let copiedmoviesArray = [...moviesArray]

    //sorting the movies according to title and returning the title of the movies
    copiedmoviesArray.sort((a,b)=>a.title.localeCompare(b.title))

    //Declaring movie Titles to slice them for top20
    let movieTitles =  copiedmoviesArray.map(movie=>movie.title)

    return movieTitles.slice(0,20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

     //Copying the array
     let copiedmoviesArray = [...moviesArray]

     
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

//should return null if the array is empty
    if(moviesArray.length === 0){
        return null
      }
    }
