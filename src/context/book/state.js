// TODO: Load/parse 'favoriteBooks' from localStorage
// TODO: Export initial state object as default
// initial state should have keys bookSearchResults and favoriteBooks
// bookSearchResults should be an empty array
// favoriteBooks should be the value from localStorage or an empty array if localStorage value is falsy
const initialState = {
    bookSearchResults: [], 
    favoriteBooks: JSON.parse(localStorage.getItem('favoriteBooks')) || []
               
}

// Could this work? 
// if(localStorage.getItem('favoriteBooks')) {
//     //if fB is not empty get value and parse it from local storage
//     initialState.favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks'))
// }
// else {
//     initialState.favoriteBooks = []
// }


//export the initial context state
export default initialState