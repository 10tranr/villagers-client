export default function (state={

}, action) {
  let stateCopy = {...state};
  switch (action.type) {
    case 'GET_JIRA_TASKS':
      return {...state};
    default:
      return {...stateCopy};
  }
}