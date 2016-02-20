var React = require('react');
var ListItem = require('./listItem.jsx');
var ingredients = [
					{"id":1, "text":"cheese"},
					{"id":2, "text":"meat"},
					{"id":3, "text":"eggs"},
					
				];

var List = React.createClass({
	render: function() {
		var list = ingredients.map(function(item){
			return(
					<ListItem key ={item.id} ingredients={item.text}/>
			)
		});
		
		return(<ul>{list}</ul>)
	}
});

module.exports = List;