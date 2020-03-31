/*
 * Custom `index.tsx` in order to make CRA with work with this template
 */

import React, { Fragment } from 'react';

import { render } from 'react-dom';

import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';

import Electron from './Electron';

import './index.css';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <Electron />
    </AppContainer>,
    document.getElementById('root')
  )
);
