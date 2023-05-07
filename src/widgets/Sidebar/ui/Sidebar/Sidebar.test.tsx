import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import {
    renderWithTranslation,
} from '../../../../shared/libs/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('render Sidebar component', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test sidebar toggling', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle-sidebar');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
