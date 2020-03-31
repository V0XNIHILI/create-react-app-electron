/*
 * Custom Component specially made for this CRA Electron config. This component is required for hot
 * reloading of the app in the Electron windows while developing.
 */

import React from 'react';

import { hot } from 'react-hot-loader/root';

import App from './App';

const Electron = () => <App />;

export default hot(Electron);
