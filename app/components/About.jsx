var React = require('react');

var About = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">About Component</h1>
			<p>This is a weather application built on React JS. I built this for the complete React Web App Developer Course</p>
			<p>Here are some of the tools I used</p>
			<ol>
				<li><a href="https://facebook.github.io/react">React</a> - This was the Javascript Framework used.</li>
				<li><a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.</li>
			</ol>
		</div>
	);
};

module.exports = About;