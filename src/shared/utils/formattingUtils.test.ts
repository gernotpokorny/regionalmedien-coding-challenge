import { formatDate } from './formattingUtils';

test('formatDate()', () => {
	const formattedDate = formatDate(new Date(1990, 2, 4, 21, 10, 0));
	expect(formattedDate).toBe('1990-03-04-21-10-00');
});

test('formatDate()', () => {
	const formattedDate = formatDate(new Date(1990, 10, 15, 21, 10, 0));
	expect(formattedDate).toBe('1990-11-15-21-10-00');
});