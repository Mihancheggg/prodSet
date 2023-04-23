import React, { useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';


interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const {className} = props
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const toggleCollapsed = (): void => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}
        >
            <button onClick={toggleCollapsed}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.lang}/>
            </div>

        </div>
    );
};