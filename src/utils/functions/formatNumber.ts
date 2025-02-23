export const formatNumber = (num: number): string => {
	const hasDecimals = num % 1 !== 0;
	const formattedNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	return hasDecimals ? formattedNumber : `${formattedNumber}.00`;
};
