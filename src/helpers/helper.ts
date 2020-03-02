import _ from 'lodash';

export const calculateAgeFromId = (id) => {
  const idNumber = `${id}`;
  // get first 6 digits as a valid date
  // @ts-ignore
  const tempDate = new Date(idNumber.substring(0, 2), idNumber.substring(2, 4), idNumber.substring(4, 6));
  const today = new Date();
  const birthDate = new Date(tempDate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
  }
  return age;
};

export const compareAge = (ageRange, idAge) => {
  const lowAge = ageRange.substring(0, 2);
  const highAge = ageRange.substring(3, 6);

  return !(idAge < Number(lowAge) || idAge > Number(highAge));
};

export const filterData = (data, filter, method) => {
  let ordered = data;

  Object.keys(filter).map(key => {
    const criteria = filter[key];

    if (criteria.active) {
      ordered = _.orderBy(ordered, criteria.key, method);
    }
  });
  
  return ordered;
};

export const ordinalNumberFormatter = (number) => {
  const modulo = number % 100;
  const suffix = Math.floor(modulo / 10) === 1
    ? 'th'
    : (modulo % 10 === 1
      ? 'st'
      : (modulo % 10 === 2
        ? 'nd'
        : (modulo % 10 === 3
          ? 'rd'
          : 'th')));

  return `${number}${suffix}`
};