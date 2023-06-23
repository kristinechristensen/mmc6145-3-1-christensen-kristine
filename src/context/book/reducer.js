// TODO: import actions and implement reducer for each action

import {
  ADD_BOOK,
  SEARCH_BOOKS,
  REMOVE_BOOK
} from './actions'



export default function reducer(prevState, {action, payload}) {

  switch(action) {
    case ADD_BOOK:
      return {...prevState}
    case SEARCH_BOOKS:
      return {...prevState }
    case REMOVE_BOOK:
      return {...prevState}

  

    default:
      return prevState 
  }



}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}