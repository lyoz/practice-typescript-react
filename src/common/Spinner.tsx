import * as React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const Spinner: React.SFC = () => (
  <Segment className="spinner">
    <Dimmer active inverted>
      <Loader inverted={false}>Loading...</Loader>
    </Dimmer>
  </Segment>
);

export default Spinner;
