import React from 'react';
import PropTypes from 'prop-types';

const style = {
	fontSize: 110,
	color:    'lightgrey',
};

export const Display = (props) => {
	return (
		<div style={style}>
			{props.number}
		</div>
	);
}

Display.propTypes = {
	number: PropTypes.number
};