import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Base from '../widgets/base/_base.js';

import Jira from '../widgets/jira/_jira.js';
import Modcat from '../widgets/modcat/_modcat.js';
import Instrument from '../widgets/instrument/_instrument.js';
import Lexicon from '../widgets/lexicon/_lexicon.js';

import Card from '../widgets/components/card/card'

export default(
  <Route path="/">
    <Route path="card" component={Card}/>
    <Route path="/base" component={Base}>
      <Route path="jira" component={Jira}>
          
      </Route>
      <Route path="modcat" component={Modcat}>
        
      </Route>
      <Route path="instrument" component={Instrument}>
        
      </Route>
      <Route path="lexicon" component={Lexicon}>
        
      </Route>
    </Route>
  </Route>
);