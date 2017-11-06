import Instrument from './instrument';
import * as InstrumentActions from './instrument-actions.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
      
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Instrument);