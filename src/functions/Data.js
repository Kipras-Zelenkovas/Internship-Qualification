import axios from "axios";

export const getData = async (setArr, setLoad) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

    setArr(res.data)
    setLoad(false)
}

export const getDataID = async (setData, setLoad, setKeys, id) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)

    setData(res.data)
    setKeys(Object.keys(res.data))
    setLoad(false)
}
 
export const sendData = async (setData, _userID, _title, _body) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        userID: _userID,
        title: _title,
        body: _body
    })

    setData(res)
}