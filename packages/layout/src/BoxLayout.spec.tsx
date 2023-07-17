/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { BoxLayout } from './BoxLayout';

test('renders header', () => {
  const { getByText } = render(<BoxLayout />);
  const linkElement = getByText(/Lerna/i);
  expect(linkElement).toBeDefined();
});
