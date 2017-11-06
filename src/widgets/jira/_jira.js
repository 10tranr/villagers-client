import Jira from './jira';
import * as JiraActions from './jira-actions.js';
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

export default connect(mapStateToProps, mapDispatchToProps)(Jira);