import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { add } from '../../helpers/utils';
import Home from '../../src/app/home/page';

describe('Home', () => {
  it('should find Home string in page ', () => {
    const { getByText } = render(<Home />);
    const homeElement = getByText(/Home/i);
    expect(homeElement).toBeInTheDocument();
  });

  it('should return 3', () => {
    const somme = add(1, 2);

    expect(somme).toBe(3);
  });
});
