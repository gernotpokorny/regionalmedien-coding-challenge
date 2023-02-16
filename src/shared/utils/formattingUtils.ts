export const formatDate = (d: Date) => {
	const month = (d.getMonth() + 1).toString().padStart(2, '0');;
	const day = d.getDate().toString().padStart(2, '0');
	const year = d.getFullYear();
	const hours = d.getHours().toString().padStart(2, '0');
	const minutes = d.getMinutes().toString().padStart(2, '0');
	const seconds = d.getSeconds().toString().padStart(2, '0');

	return [year, month, day, hours, minutes, seconds].join('-');
}