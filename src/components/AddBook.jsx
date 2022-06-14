import React from 'react'

export default function AddBook() {
  return (
    <div>
     <h3>ADD NEW BOOK</h3>
     <form>
      <input type="text" placeholder='Book title' />
      <select id="books" name="books">
        <option >Javascript</option>
        <option > Linux </option>
        <option > DataBase </option>
        <option > React </option>
      </select>
     </form>
    </div>
  )
}
