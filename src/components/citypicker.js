import React from 'react';
import createClass from 'create-react-class';
import VirtualizedSelect from 'react-select';

const DATA = require('../data/cities');

var CityPicker = createClass({
	displayName: '',
	getInitialState () {
		return {};
	},
	updateValue (newValue) {
		console.log(newValue);
		this.setState({
			selectValue: newValue
		});
	},
	render () {
		var options = DATA.CITIES;
		return (
			<div className="section">
				<VirtualizedSelect ref="citySelect"
					options={options}
					simpleValue
					clearable
					name="select-city"
					value={this.state.selectValue}
					onChange={this.updateValue}
					searchable
					labelKey="name"
					valueKey="name"
				/>
			</div>
		);
	}
});


export default CityPicker;
