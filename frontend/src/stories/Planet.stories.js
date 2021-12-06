import React from 'react';
import Planet from '../container/home/Planet';

export default {
    component: Planet,
    title: 'ExoProperty/Planet',
};

const Template = (args) => <Planet {...args} />;

export const Mars = Template.bind({});
Mars.args = {choice: 0}

export const Venus = Template.bind({});
Venus.args = {choice: 1}

export const Io = Template.bind({});
Io.args = {choice: 2}

export const Triton = Template.bind({});
Triton.args = {choice: 3}

export const Callisto = Template.bind({});
Callisto.args = {choice: 4}

export const Neptune = Template.bind({});
Neptune.args = {choice: 5}