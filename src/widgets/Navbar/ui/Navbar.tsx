import React from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                /
            </div>
        </div>
    );
};
