import Modcat from './modcat';
import * as ModcatActions from './modcat-actions.js';
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

export default connect(mapStateToProps, mapDispatchToProps)(Modcat);