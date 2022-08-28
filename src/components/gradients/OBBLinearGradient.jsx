import PropTypes from "prop-types";

export const OBBLinearGradient = ({ gradientProps, stopProps }) => {
	const {
		id,
		gradientUnits,
		gradientTransform,
		href,
		spreadMethod,
		x1,
		x2,
		y1,
		y2,
		classNames,
		style,
	} = gradientProps;

	return (
		<defs>
			<linearGradient
				id={id}
				{...gradientProps}
				// gradientTransform='rotate(-45)'
			>
				{stopProps && stopProps.map(({ stopProps }) => <stop {...stopProps} />)}
				{/* <stop offset='0%' stopColor='#06f' />
				<stop offset='70%' stopColor='#111' /> */}
			</linearGradient>
		</defs>
	);
};

OBBLinearGradient.propTypes = {
	gradientProps: PropTypes.shape({
		id: PropTypes.string.isRequired,
		gradientUnits: PropTypes.string,
		gradientTransform: PropTypes.string,
		href: PropTypes.string,
		spreadMethod: PropTypes.string,
		x1: PropTypes.string,
		x2: PropTypes.string,
		y1: PropTypes.string,
		y2: PropTypes.string,
		classNames: PropTypes.array,
		style: PropTypes.string,
	}),
	stops: PropTypes.arrayOf(
		PropTypes.shape({
			offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			stopColor: PropTypes.string,
			stopOpacity: PropTypes.number,
		})
	),
};
