import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Table } from "./table/Table"
import { NavBar } from "./NavBar"
import { AddForm } from "./AddForm"
import { Item } from './Item'

export const App = () => {

  const [addRes, setAddRes] = useState([])

  return (
    <div className="min-w-screen realative">
      <NavBar />
      <Routes>
        <Route path="/:page" element={<Table />}/>
        <Route path="/add" element={<AddForm addRes={addRes} setAddRes={setAddRes}/>}/>
        <Route path="/item/:id" element={<Item />}/>
      </Routes>
    </div>
  )
}
