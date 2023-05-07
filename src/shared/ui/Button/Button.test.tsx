import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('render Button component', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
