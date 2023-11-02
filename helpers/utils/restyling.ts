const getNumberWithSpaces = (number: string | number) => number.toString().replaceAll(' ', '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export default getNumberWithSpaces;
