import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/libs/classNames/classNames';
import styles from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const {className} = props
    const {t, i18n} = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (

            <Button
                className={classNames(styles.LangSwitcher, {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toggleLanguage}
            >
                {t('Язык')}
            </Button>
    )
};