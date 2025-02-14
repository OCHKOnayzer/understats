import moment from 'moment';

export function formatDate(apiDate: string): string {
	return moment(apiDate).utc().format('DD.MM.YYYY');
}
