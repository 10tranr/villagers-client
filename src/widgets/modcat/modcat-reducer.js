export default function (state={

}, action) {
  let stateCopy = {...state};
  switch (action.type) {
    case 'GET_MODCAT_DATA':
      return {...state};
    default:
      return {...stateCopy};
  }
}