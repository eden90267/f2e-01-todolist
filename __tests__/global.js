import React from 'react';
import deepFreeze from 'deep-freeze';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

global.React = React;

global.localStorage = {};

global._todolist = deepFreeze([
  {
    id: '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
    title: 'test'
  }
]);