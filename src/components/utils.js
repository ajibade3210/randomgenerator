const rangeUpdate = (event,setRangeFrom) => {
    setRangeFrom( event.target.value);
  }

const scrollClick = (setClick) => {
    setClick(true)
    setTimeout(() => {setClick(false)}, 500);
  }

export default {rangeUpdate,scrollClick}


 //   console.log('winn',winn)
//  if(winn === undefined){
//   results.push(11111);
// }else if(winn.toString().length === 5){
//  setResults(results.push(winn))
// }else{
//   results.push(winn)

// }