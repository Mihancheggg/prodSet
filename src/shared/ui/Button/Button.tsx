import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, children, ...restProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...restProps}
        >
            {children}
        </button>
    );
};
