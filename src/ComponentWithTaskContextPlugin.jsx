import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import MyComponentWithTaskContext from './components/MyComponentWithTaskContext/MyComponentWithTaskContext'

const PLUGIN_NAME = '{{pluginClassName}}';

export default class ComponentWithTaskContextPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    // This templates adds a component in the CRMContainer
    // that displays information about the task 
    flex.CRMContainer.Content.replace(<MyComponent key="my-component"/>)

  }
}
