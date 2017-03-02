var React = require('react');

var WeatherMessage = (props) => {
	var {temp, location} = props;
	return(
		<div>
			<h3 className="text-center">It is {temp} in {location}.</h3>
		</div>
	);
}

module.exports = WeatherMessage;