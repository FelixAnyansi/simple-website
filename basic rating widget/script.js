const data = {
    currentRating: 0,
    ratings: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  }
  /*The next thing we need to do is grab the div element with the rating id using the querySelector method of the document.
   We then assign the returned value to a ratingContainer constant.
    After that we create a new unordered list ul element using
     the createElement method of the document.*/
  const ratingContainer = document.querySelector("#rating");
const ul = document.createElement("ul");