import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            + 'Asperiores dicta distinctio exercitationem harum libero, '
            + 'molestias nisi officia omnis pariatur perferendis possimus '
            + 'quam quidem reiciendis vitae, voluptatem? Aliquid, numquam, veniam?',
    },
};
