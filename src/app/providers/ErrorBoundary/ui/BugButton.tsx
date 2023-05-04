import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState<boolean>(false);

    const toggleError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={toggleError}>
            Throw error
        </Button>
    );
};
