import React from 'react';
import POTD from '../container/home/POTD';

export default {
    component: POTD,
    title: 'ExoProperty/Picture of the Day',
};

const Template = (args) => <POTD {...args} />;

export const Primary = Template.bind({});