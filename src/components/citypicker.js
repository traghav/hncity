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


		this.setState({
			selectValue: newValue
		});
		this.props.changeCity(newValue);
		this.props.changeCityDetail(newValue);

	},
	render () {
		var options = DATA.CITIES;
		return (
			<div>
			<h4>Pick your city</h4>
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
			</div>
		);
	}
});


export default CityPicker;
