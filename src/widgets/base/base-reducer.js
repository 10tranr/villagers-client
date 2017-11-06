export default function (state={

}, action) {
  let stateCopy = {...state};
  switch (action.type) {
    case 'GET_USER':
      return {...state};
    default:
      return {...stateCopy};
  }
}