import React from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
