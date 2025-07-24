import { render } from '@testing-library/react-native';
import { ProductsScreen } from '../screens/ProductsScreen';

describe('ProductsScreen', () => {
  it('should render the screen title', () => {
    const { getByText } = render(<ProductsScreen />);
    expect(getByText('Produtos')).toBeTruthy();
  });

  it('should render product items', () => {
    // Este teste será expandido quando o componente ProductsScreen for implementado
    const { queryAllByTestId } = render(<ProductsScreen />);
    expect(queryAllByTestId('product-item').length).toBeGreaterThan(0);
  });
});