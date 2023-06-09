import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        square,
        size = ButtonSize.M,
        ...restProps
    } = props;

    const mods: Record<string, boolean> = {
        [styles.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [className, styles[theme], styles[size]])}
            {...restProps}
        >
            {children}
        </button>
    );
};
