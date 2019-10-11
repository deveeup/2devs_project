
const getCurrentDate = (value) => {
  const newDate = new Date();
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let returnData;
  switch (value){
    case 'going':
      returnData = `${year}-${month}-${day}`;
      break;
    case 'return':
      returnData = `${year}-${month}-${day + 7}`;
      break;
    default:
      return null;
  }
  return returnData;
};

export default getCurrentDate;