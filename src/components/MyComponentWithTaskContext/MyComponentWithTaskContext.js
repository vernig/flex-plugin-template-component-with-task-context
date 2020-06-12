import * as React from 'react';
import { withTaskContext } from '@twilio/flex-ui';

class MyComponentWithTaskContext extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <div>
        <p>Task Attributes:</p>
        <p>{task ? JSON.stringify(task.attributes) : 'Waiting for task...'}</p>
      </div>
    );
  }
}

export default withTaskContext(MyComponentWithTaskContext);
