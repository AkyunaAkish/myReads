import React, {Component} from 'react';
import Book from './books';

class BookShelf extends Component{


render(){


	return (
<div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <Book/>
                      </li>
                    </ol>
                  </div>

		)
}


}


export default  BookShelf