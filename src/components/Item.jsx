import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { getDataID } from "../functions/Data"

export const Item = () => {

  const params = useParams()
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)
  const [keys, setKeys] = useState([])

  useEffect(() => {
    getDataID(setData, setLoad, setKeys, params.id)
  }, [])
    
  if(load){
  	return(
		  <div>
        <h1>Loading</h1>
      </div>
    )
  }

  return(
  	<div className="absolute inset-y-44 inset-x-96">
      <table className="flex flex-wrap w-max border-4 border-gray-600">
        <tbody>
          {keys.map((item, index) => {
            return(
              <tr key={index} className="border-b-2 border-gray-600">
                <th className="border-r-2 w-20 border-gray-600">{item}</th>
                <td className="text-center px-2 py-2 text-md">{data[item]}</td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    	<Outlet />
    </div>
  )
}