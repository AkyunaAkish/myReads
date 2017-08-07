import React, {Component} from 'react';
import Book from './books';


class SearchBar extends Component{
	
	render(){

		return(
			<div className="search-books-input-wrapper">
                
                <input
                onChange={e => this.props.onSearch(e.target.value)}
                value={this.props.query}
                />
  {this.props.searchResults.map(book => (
    <Book/>
     )
  )}
                
              </div>
			  )
	}

}




export default SearchBar