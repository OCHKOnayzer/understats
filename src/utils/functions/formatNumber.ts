export const formatNumber = (num: number): string => {
	if (isNaN(num)) return '0.00';

	const roundedNum = Number(num.toFixed(2));

	const [integerPart, decimalPart = '00'] = roundedNum.toString().split('.');

	const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

	return `${formattedInteger}.${decimalPart.padEnd(2, '0')}`;
};
