import React from 'react';
import Locations from '../container/admin/Locations';

export default {
    component: Locations,
    title: 'ExoProperty/Locations',
};

const Template = (args) => <Locations {...args} />;

export const Primary = Template.bind({});