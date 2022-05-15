import { useState } from "react"
import { sortByID, descSortByID, sortByTitle, descSortByTitle, sortByBody, descSortByBody } from "../../functions/Sorts"

export const TableHead = ({data, setData}) => {

  const [sortID, setIDSort] = useState(true)
  const [sortTitle, setTitleSort] = useState(false)
  const [sortBody, setBodySort] = useState(false)
    
  return(
    <thead>
      <tr className="border-b-2 border-gray-600">
        <td className="p-2"><button onClick={() => {
          setData(sortID ? sortByID(data, sortID, setIDSort, setTitleSort, setBodySort) : descSortByID(data, sortID, setIDSort, setTitleSort, setBodySort))
          setTitleSort(true)
          setBodySort(true)
        }}>
          Id {sortID ? <i className="fa-solid fa-caret-down stroke-1"></i> : <i className="fa-solid fa-caret-up stroke-1"></i>} 
        </button></td>
        <td className="p-2"><button onClick={() => {
          setData(sortTitle ? sortByTitle(data, sortTitle, setTitleSort) : descSortByTitle(data, sortTitle, setTitleSort))
          setIDSort(true)
          setBodySort(true)
        }}>
          Title {sortTitle ? <i className="fa-solid fa-caret-down stroke-1"></i> : <i className="fa-solid fa-caret-up stroke-1"></i>} 
        </button></td>
        <td className="p-2"><button onClick={() => {
          setData(sortBody ? sortByBody(data, sortBody, setBodySort) : descSortByBody(data, sortBody, setBodySort))
          setIDSort(true)
          setTitleSort(true)
        }}>
          Text {sortBody ? <i className="fa-solid fa-caret-down stroke-1"></i> : <i className="fa-solid fa-caret-up stroke-1"></i>} 
        </button></td>
      </tr>
    </thead>
    )
}