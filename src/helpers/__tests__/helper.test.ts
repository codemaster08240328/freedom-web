/* eslint-env jest */
import { map } from 'lodash'
import { calculateAgeFromId, compareAge, filterData, ordinalNumberFormatter } from '../helper'

describe('helpers test', () => {
  it ("should calculate age from id", () => {
    const age = calculateAgeFromId('930319');

    expect(age).toBe(25);
  });

  it ("should return correct age for birthday month", () => {
    const today = new Date();
    let month = `${today.getMonth()}`;

    if (Number(month) < 10) {
      month = `0${month}`
    }

    let day = `${today.getDate() +1 }`;
    if (Number(day) < 10) {
      day = `0${day}`
    }

    const age = calculateAgeFromId(`93${month}${day}`);

    expect(age).toBe(24);
  });

  it ("should return correct age for birthday month more than current month", () => {
    const today = new Date();
    let month = `${today.getMonth() + 2}`;

    if (Number(month) < 10) {
      month = `0${month}`
    }

    let day = `${today.getDate()}`;
    if (Number(day) < 10) {
      day = `0${day}`
    }

    const age = calculateAgeFromId(`93${month}${day}`);

    expect(age).toBe(24);
  });

  it('should return true for age inside interval', () => {
    const isAllow = compareAge('17035', 25);

    expect(isAllow).toBe(true);
  });

  it('should return false for age less than in interval', () => {
    const isAllow = compareAge('17035', 15);

    expect(isAllow).toBe(false);
  });

  it('should return false for age more than in interval', () => {
    const isAllow = compareAge('17035', 45);

    expect(isAllow).toBe(false);
  });

  it('should return true for age equals higher range in interval', () => {
    const isAllow = compareAge('17035', 35);

    expect(isAllow).toBe(true);
  });

  it('should return true for age equals lowest range in interval', () => {
    const isAllow = compareAge('17035', 17);

    expect(isAllow).toBe(true);
  });

  it('should order products by productId in desc', () => {
    const fakeData = [
      { productId: '1' }, { productId: '8' }];

    const filter = {
      productId: {
        key: 'productId',
        active: true
      }
    };

    const orderedKeys = map(filterData(fakeData, filter, 'desc'), 'productId');

    expect(orderedKeys[0]).toBe('8');
    expect(orderedKeys[1]).toBe('1');
  });

  it('should return object with the same order', () => {
    const fakeData = [
      { productId: '1' }, { productId: '8' }];

    const filter = {
      productId: {
        key: 'productId',
        active: false
      }
    };

    const orderedKeys = map(filterData(fakeData, filter, 'desc'), 'productId');

    expect(orderedKeys[1]).toBe('8');
    expect(orderedKeys[0]).toBe('1');
  });

  it('should return well formated numbers with correct suffixes', () => {
    const oneHundred = ordinalNumberFormatter(100);
    const twentyFour = ordinalNumberFormatter(24);
    const eightyThird = ordinalNumberFormatter(83);
    const fiveHundredTwentyFirst = ordinalNumberFormatter(521);
    const first = ordinalNumberFormatter(1);
    const thirtySecond = ordinalNumberFormatter(32);
    const oneThousandFiftyFourth = ordinalNumberFormatter(1054);
    const oneHundrendEleventh = ordinalNumberFormatter(111);

    expect(oneHundred).toBe('100th');
    expect(twentyFour).toBe('24th');
    expect(eightyThird).toBe('83rd');
    expect(fiveHundredTwentyFirst).toBe('521st');
    expect(first).toBe('1st');
    expect(thirtySecond).toBe('32nd');
    expect(oneThousandFiftyFourth).toBe('1054th');
    expect(oneHundrendEleventh).toBe('111th');
  })
});