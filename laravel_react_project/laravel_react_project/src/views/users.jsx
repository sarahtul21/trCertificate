import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import env from "../env";
import QRCode from 'qrcode'
import QRCodeBoxForTable from "../Components/QRCodeBoxForTable";
import {certificates} from '../assets/certificates.json'
import DownloadPDF from "../Components/DownloadPDF";
import Certificate from "./Certificate";
import CerForPdf from "./cerForPdf";

export default function users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [src,setSrc] = useState('')
    const linkURL = 'https://www.eryoserciyes-edu-tr.pro/certificate/';

    useEffect(()=> {
        // getUsers();
        setUsers(certificates)
        QRCode.toDataURL(linkURL).then((data)=>{
            setSrc(data)
        });
    }, [])

    // const onDeleteClick = user => {
    //     if (!window.confirm("Are you sure you want to delete this user?")) {
    //       return
    //     }
    //     axiosClient.delete(`/users/${user.id}`)
    //       .then(() => {
    //         getUsers()
    //       })
    //   }

    // const getUsers = () => {
    //     setLoading(true)
    //     axiosClient.get('/users')
    //       .then(({ data }) => {
    //         setLoading(false)
    //         setUsers(data.data)
    //       })
    //       .catch(() => {
    //         setLoading(false)
    //       })
    //   }

    return(
        <div>
        <div className='flex justify-between items-center mb-6'>
          <h1 className=' text-4xl text-accent'>Certificate</h1>
          <Link className="btn btn-accent" to="/certificates/new">Add new</Link>
        </div>
        <div className="card animated fadeInDown overflow-x-auto bg-white">
        <table className="table table-pin-rows table-pin-cols table-sm text-center border-gray-200 w-fit m-auto">

            <thead className='border-2 border-gray-200'>
            <tr>

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
                <tr key={u.application}>

                    <td className='max-w-44'>{u.name}</td>
                    {/* env.API_LINK_STORAGE + u.image */}
                    <td className='max-w-20'><img src={u.image} alt='cer'  className='m-auto' /></td>
                    <td  className='max-w-20'>
                        <Link to={'https://www.eryoserciyes-edu-tr.pro/belge/SonucBelgesi/BasvuruNo/'+u.application}>
                            <QRCodeBoxForTable cerUrl={u.application} />
                        </Link>
                    </td>
                    <td className="max-w-20">
                        {/* <Link className="btn-edit" to={'/users/' + u.id}>Edit</Link> */}
                        <DownloadPDF downloadFileName={u.name+' certificate'} rootElementId={'pdf'+u.application} imageName={u.image}  />
                        <div id={'pdf'+u.application} className='absolute w-[925px] h-[1308px] top-0 left-0 -z-20 '><CerForPdf user={u} /></div>
                        <div  className='absolute w-[925px] h-[1308px] top-0 left-0 -z-10 bg-white'></div>
                        <button className="btn btn-warning btn-xs mt-3" onClick={ev => onDeleteClick(u)}>Delete</button>
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
