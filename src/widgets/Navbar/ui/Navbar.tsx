import React from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation('about');

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={styles.mainLink}
                >
                    Main
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
