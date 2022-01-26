import { useEffect, useState } from "react";
import CustomizedButtons from "./CustomizedButtons";


const Result =({rangeFrom,rangeTo, items,buttonOneData, jet}) => {
    // const [results, setResults] = useState([])

    // console.log('RESULT__rangeFrom',rangeFrom);
    // console.log('RESULT__rangeTo',rangeTo);

    let results = []


        /* GENERATE RANDOM NUMBER */
        const settingRandomNum = (rangeTo,rangeFrom) => {
            let random = Math.random() * ((rangeTo -rangeFrom) + 1)
            let result = Math.floor(random) + rangeFrom
      
            return result
        }


  function uploadData () {
        results = []

      for(let i = 0; i<items; i++ ){
          let winn = settingRandomNum(rangeTo,rangeFrom)
             results.push(winn)
      }
      return results
    }

  jet && uploadData()


    return(
        <div className="wrapper">
        <div className="result_wrapper">
            <div className="result_list">
               <div className="">
           {results.map((x,idx) => (
                 <span className="result_item" key={idx}>{x}</span>
           ))}
               </div>
            </div>
        </div>
        <CustomizedButtons results={results} />
        </div>
    )
}

export default Result;