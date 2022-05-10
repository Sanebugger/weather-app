// import React, { useEffect, useState } from 'react'

// export default function Weather() {
   
//     const [City,setCity]=useState(null)
//     const [Search,setSearch]=useState('mumbai')

//     useEffect( () => {
//         const fetchApi = async() =>{
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=3e0930d631ac79d49bcd4eeddc000553`
//             const response = await fetch(url)
//             const resJson = await response.json();
//             // console.log(resJson)      
//             setCity(resJson); 
//         }  
//         fetchApi();
//     },[])

//     return (<>
//         <div className="card container my-5 text-center">
//             <div className="card-body">
//                 <input placeholder='your city name' onChange={  (event) => {setSearch(event.target.value)  }}></input>
//                 <a href="#" className="btn btn-primary  my-2">click to search</a>
//             </div>
//         </div>
//         <div className="card container my-5 text-center">
//             <div className="card-body">
//                 <h3 className="card-title">{City}</h3>
//                 <h4 className="info">{Search}</h4>
//             </div>
//         </div>
//     </>
//     )
// }
import axios from "axios";
import { useEffect, useState } from "react";
import './Weather.css'

function Weather() {


  const apiKey = "3e0930d631ac79d49bcd4eeddc000553"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }


  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h3 className="heading mt-5">SEARCH LIVE TEMPERATURE</h3>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control" placeholder="enter city name"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
            <h5 className="weathorCity">
              {data?.name}
            </h5>
            <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          </div>
        </div>
      }
      <p className="footer"> 'bootstapped' with 'npx create-react-app' and &#10084;</p>

    </div>
  );
}

export default Weather;