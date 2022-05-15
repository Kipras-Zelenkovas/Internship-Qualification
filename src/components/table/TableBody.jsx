import { Link } from "react-router-dom"

export const TableBody = ({page, sortedData}) => {

  return(
    <tbody>
      {sortedData.slice(page*10-10, page*10).map((element, index) => {
        return(
          <Link to={"/item/" + element.id} key={index}>
            <tr className="flex border-b-2 border-r-2 border-gray-600">
              <td className="p-2 max-w-min border-r-2 border-gray-600">{element.id}</td>
              <td className="p-2 max-w-md truncate border-r-2 border-gray-600">{element.title}</td>
              <td className="p-2 max-w-lg truncate border-gray-600">{element.body}</td>
            </tr>
          </Link>
        )
      })}
    </tbody>
  )
}