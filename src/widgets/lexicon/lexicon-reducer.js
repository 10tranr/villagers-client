export default function (state={

}, action) {
  let stateCopy = {...state};
  switch (action.type) {
    case 'GET_LEXICON_DATA':
      return {...state};
    default:
      return {...stateCopy};
  }
}