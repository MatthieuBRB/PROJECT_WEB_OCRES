import React from 'react';
import Weather from '../container/home/Weather';

export default {
    component: Weather,
    title: 'ExoProperty/Weather',
};

const Template = (args) => <Weather {...args} />;

export const Primary = Template.bind({});