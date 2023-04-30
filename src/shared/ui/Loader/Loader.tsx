import React from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string
}

export const Loader = (props: LoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames('lds-default', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
