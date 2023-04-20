import React from 'react';
import './styles/index.scss'
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/libs/classNames/classNames';
import { AppRouter } from 'app/providers/router';


export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <AppRouter/>
        </div>
    );
};