import React from 'react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import centered from '@storybook/addon-centered/react';
import Box from './Box';

export default {
  title: 'Box',
  decorators: [withPropsTable, centered],
  argTypes: {
    boxHeight: { control: { type: 'range', min: 50, max: 1000, step: 50 } },
  },
  parameters: {
    props: {
      propTablesInclude: [Box],
    },
  },
};

export const box = (props) => <Box {...props} />;

box.args = {
  boxHeight: 50,
};
