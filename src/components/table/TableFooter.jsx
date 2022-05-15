import { Link } from "react-router-dom"

export const TableFooter = ({page, data}) => {

  return(
		<tfoot>
			<tr>
				<td><Link to={"/" + (parseInt(page)-1)}><button className="border-4 border-sky-500 w-14 bg-sky-300 disabled:bg-gray-600 disabled:border-gray-800" disabled={parseInt(page)-1 < 1 ? true : ''}>Prev</button></Link></td>
  			<td><Link to={"/" + (parseInt(page)+1)}><button className="border-4 border-sky-500 w-14 bg-sky-300 disabled:bg-gray-600 disabled:border-gray-800" disabled={parseInt(page)*10+1 > data.length ? true : ''}>Next</button></Link></td>
			</tr>
		</tfoot>
	)
}