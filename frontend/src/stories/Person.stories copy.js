import React from 'react';
import Person from '../container/home/Person';

export default {
    component: Person,
    title: 'ExoProperty/Person',
};

const Template = (args) => <Person {...args} />;

export const Primary = Template.bind({});