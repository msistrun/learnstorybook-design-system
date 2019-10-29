import React from 'react';
import {
    Avatar
} from '@storybook/react/demo';
import {
    withKnobs,
    select,
    boolean
} from '@storybook/addon-knobs';

// …

export const knobs = () => ( <
    Avatar loading = {
        boolean('Loading')
    }
    size = {
        select('Size', ['tiny', 'small', 'medium', 'large'])
    }
    username = "Dominic Nguyen"
    src = "https://avatars2.githubusercontent.com/u/263385" /
    >
);

knobs.story = {
    decorators: [withKnobs],
};