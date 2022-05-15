import { useState } from "react"
import { Outlet } from "react-router-dom"
import { sendData } from "../functions/Data"

export const AddForm = ({setAddRes}) => {

	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		sendData(setAddRes, "5", title, body)
	}

  return(
    <div className="border-2 border-gray-600 w-max h-max absolute inset-x-1/3 inset-y-72">
      <form onSubmit={handleSubmit}>
				<input className="border-2 border-black m-3 rounder-md p-1" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" required/>
				<input className="border-2 border-black m-3 rounder-md p-1" type="text" onChange={(e) => setBody(e.target.value)} placeholder="Text" required/>
				<input className="border-2 border-black m-3 rounder-md p-1 hover:cursor-pointer hover:bg-gray-400" type="submit" value="Add"/>
			</form>
      <Outlet/>
    </div>
  )
} 