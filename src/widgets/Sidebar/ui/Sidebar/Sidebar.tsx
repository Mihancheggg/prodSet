import React, { useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

    const toggleCollapsed = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="toggle-sidebar"
                onClick={toggleCollapsed}
            >
                { t('Переключить') }
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>

        </div>
    );
};
