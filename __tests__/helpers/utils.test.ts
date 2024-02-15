import '@testing-library/jest-dom';
import { add, multiplication } from '../../helpers/utils';

describe('Helpers', () => {
  it('should return 3', () => {
    const somme = add(1, 2);

    expect(somme).toBe(3);
  });

  it('should return 3', () => {
    const multipl = multiplication(1, 2);

    expect(multipl).toBe(2);
  });
});
