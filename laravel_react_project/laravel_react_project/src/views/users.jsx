import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import env from "../env";
import QRCode from 'qrcode'

export default function users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [src,setSrc] = useState('')
    const linkURL = 'https://www.eryoserciyes-edu-tr.pro/certificate/';

    useEffect(()=> {
        getUsers();
        QRCode.toDataURL(linkURL).then((data)=>{
            setSrc(data)
        });
    }, [])

    const onDeleteClick = user => {
        if (!window.confirm("Are you sure you want to delete this user?")) {
          return
        }
        axiosClient.delete(`/users/${user.id}`)
          .then(() => {
            getUsers()
          })
      }

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
          .then(({ data }) => {
            setLoading(false)
            setUsers(data.data)
          })
          .catch(() => {
            setLoading(false)
          })
      }

    return(
        <div>
        <div className='flex justify-between items-center mb-6'>
          <h1 className=' text-4xl text-accent'>Certificate</h1>
          <Link className="btn btn-accent" to="/certificates/new">Add new</Link>
        </div>
        <div className="card animated fadeInDown overflow-x-auto">
        <table className="table table-zebra table-pin-rows table-pin-cols table-sm text-center border-gray-200 w-fit m-auto">

            <thead className='border-2 border-gray-200'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Link</th>
              <th>Actions</th>
            </tr>
            </thead>
            {loading &&
              <tbody className='border-2 border-gray-200'>
              <tr>
                <td colSpan="5" className="text-center">
                    <span className="loading loading-infinity loading-lg text-accent"></span>
                </td>
              </tr>
              </tbody>
            }
            {!loading &&
              <tbody>
              {users.map(u => (
                <tr key={u.id}>
                    <td >{u.id}</td>
                    <td className='max-w-44'>{u.name}</td>
                    <td className='max-w-20'><img src={env.API_LINK_STORAGE + u.image} alt='cer'  className='m-auto' /></td>
                    <td  >
                        <Link to={'https://www.eryoserciyes-edu-tr.pro/certificate/'+u.id}>
                            <img src={src} alt="QRCode" className='m-auto'/>
                        </Link>
                    </td>
                    <td >
                        {/* <Link className="btn-edit" to={'/users/' + u.id}>Edit</Link> */}
                        &nbsp;
                        <button className="btn btn-warning btn-xs" onClick={ev => onDeleteClick(u)}>Delete</button>
                    </td>
                </tr>
              ))}
              </tbody>
            }
          </table>
        </div>
      </div>
    )
}
