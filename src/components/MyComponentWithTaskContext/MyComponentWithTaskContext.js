import * as React from 'react';
import { withTaskContext } from '@twilio/flex-ui';

class MyComponentWithTaskContext extends React.Component {
  render() {
    const { task } = this.props;    
    return (
      <div style={{ flexDirection: 'row' }}>
          <p>Task Information:</p>
          <p>{JSON.stringify(task)}</p>
      </div>
    );
  }
}

export default withTaskContext(MyComponentWithTaskContext);