import { lazy } from 'react';

export const AboutPageLazy = lazy(() => import('./AboutPage')); // подгружаемый компонент должен экспортироваться по дефолту
