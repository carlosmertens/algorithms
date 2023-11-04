console.log('\n********** 18. Movie Filter **********');
// 18. Post
// Fiter objects to display movies preferences
// all the movies in 2018 with rating > 4
// sort them by rating in descending order
// Pick their title

const movies = [
  { title: 'The Rain', year: 2018, rating: 4.5 },
  { title: 'The Cloud', year: 2018, rating: 4.7 },
  { title: 'The Mountain', year: 2018, rating: 3 },
  { title: 'The Sky', year: 2017, rating: 4.5 },
];

const filteredMovies = movies
  .filter((movie) => movie.year === 2018 && movie.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((movie) => movie.title);

console.log({ filteredMovies });
