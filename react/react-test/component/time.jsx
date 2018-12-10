
import React from ../src/react.min.js

class Click3 extends React.Component{
	render(){
		return(
			<div>
				<h1>Hello World</h1>
				<p>2.现在是{this.props.date.toLocaleTimeString()}</p>
			</div>
		)
	}
}

export {Click3}