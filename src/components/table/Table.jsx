import { useState, useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import { TableBody } from "./TableBody"
import { TableFooter } from "./TableFooter"
import { TableHead } from "./TableHead"
import { getData } from "../../functions/Data"

export const Table = () => {

  const params = useParams()
  const [data, setData] = useState([])
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState(true)

  const sortedData = data.filter((element) => {
    if(element.title.includes(title)){
      return element
    }
  })

  useEffect(() => {
    getData(setData, setLoad)
  }, [])

  if(load){
    return(
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

  return(
    <div className="min-w-screen absolute inset-y-1/4 inset-y-40 inset-x-80">
      <input type="text" onChange={(e) => setTitle(e.target.value)} className="border-2 border-black" placeholder="Search"/>
      <table className="table-auto border-2 border-gray-600">
        <TableHead data={data} setData={setData}/>
        <TableBody page={params.page} sortedData={sortedData}/>
        <TableFooter page={params.page} data={sortedData}/>
        <Outlet/>
      </table>
    </div>
  )

} 