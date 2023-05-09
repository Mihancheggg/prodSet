import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/'
    }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Test',
        theme: AppLinkTheme.PRIMARY
    },
};

export const Secondary: Story = {
    args: {
        children: 'Test',
        theme: AppLinkTheme.SECONDARY
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Test',
        theme: AppLinkTheme.PRIMARY
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
    args: {
        children: 'Test',
        theme: AppLinkTheme.SECONDARY
    },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
