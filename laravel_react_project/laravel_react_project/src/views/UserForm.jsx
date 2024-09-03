import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import QRCodeBox from "../Components/QRCodeBox";
import { Link } from "react-router-dom";

export default function UserForm(){
    const {id} = useParams();
    const navigate = useNavigate();
    const cerTypeArray = [
        {
            id: 0,
            name: 'please choose certificate type'
        },
        {
            id: 1,
            name: '2022 ERÜYÖS SINAV SONUÇ BELGESİ'
        },
        {
            id: 2,
            name: 'another type of certificate '
        },
    ]
    const [user, setUsers] = useState({
        // id: null,
        name: '',
        email: 'email@email.com',
        password: 'xxx1234xxx',
        passport: '',
        application: '',
        document: '',
        nationality: '',
        birth:'',
        exam:'',
        question:'',
        correct:'',
        incorrect:'',
        blank:'',
        score:'',
        type:'',
        image:'',
    });
    const [userId , setUserId] = useState()
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    if(id)
    {
        useEffect(() => {
            setLoading(true)
            axiosClient.get(`/users/${id}`)
              .then(({data}) => {
                setLoading(false)
                setUsers(data)
              })
              .catch(() => {
                setLoading(false)
              })
          }, [])
    }

    const onSubmit = ev => {
        ev.preventDefault()
        // edit cer
        if (user.id) {
          axiosClient.put(`/users/${user.id}`, user)
            .then(() => {
            //   navigate('/users')

            })
            .catch(err => {
              const response = err.response;
              if (response && response.status === 422) {
                setErrors(response.data.errors)
              }
            })
            // add new cer
        } else {
          axiosClient.post('/users', user)
            .then(() => {
            alert('done')
            setLoading(true)
            axiosClient.get('/users')
                .then(({ data }) => {
                setLoading(false)
                const item = data.data.find((element) => element.passportNum === user.passportNum)
                setUserId(item.id)
                })
                .catch(() => {
                setLoading(false)
                })
            })
            .catch(err => {
              const response = err.response;
              if (response && response.status === 422) {
                setErrors(response.data.errors)
              }
            })
        }
      }

    return(
    <>
        {user.id && <h1>Update User: {user.name}</h1>}
        {!user.id &&
            <div className='flex justify-between items-center mb-8'>
                <h1 className=" text-2xl text-accent">Add new Certificate</h1>
                <Link className="btn btn-accent" to="/certificates">View All Certificates</Link>
            </div>
        }
        <div className="card animated fadeInDown max-w-[500px] m-auto">
            {loading && (
            <div className="text-center">
                <span className="loading loading-infinity loading-lg text-accent"></span>
            </div>
            )}
            {errors &&
            <div className="alert">
                {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
                ))}
            </div>
            }
            {!loading && !userId ?  (
            <form onSubmit={onSubmit} >
                <input value={user.name} onChange={ev => setUsers({...user, name: ev.target.value})} placeholder="Full name" className='input input-accent w-full bg-[#f7f7f7] mb-3'/>
                <input value={user.passport} onChange={ev => setUsers({...user, passport: ev.target.value})} placeholder="Passport number" className='input input-accent w-full bg-[#f7f7f7] mb-3'/>
                <input value={user.application} onChange={ev => setUsers({...user, application: ev.target.value})} placeholder="Application ID" className='input input-accent w-full bg-[#f7f7f7] mb-3'/>
                <input value={user.document} onChange={ev => setUsers({...user, document: ev.target.value})} placeholder="Document ID" className='input input-accent w-full bg-[#f7f7f7] mb-3'/>
                <input value={user.nationality} onChange={ev => setUsers({...user, nationality: ev.target.value})} placeholder="Nationality" className='input input-accent w-full bg-[#f7f7f7] mb-3'/>
                <div class='flex justify-between items-center '>
                    <lable className='w-[30%] text-accent'>Date of Birth:</lable>
                    <input value={user.birth} type='date' onChange={ev => setUsers({...user, birth: ev.target.value})} placeholder="Date of birth" className='input input-accent w-[70%] bg-[#f7f7f7] mb-3'/>
                </div>
                <div class='flex justify-between items-center '>
                    <lable className='w-[30%] text-accent'>Date of Exam:</lable>
                    <input value={user.exam} type='date' onChange={ev => setUsers({...user, exam: ev.target.value})} placeholder="Date of exam" className='input input-accent w-[70%] bg-[#f7f7f7] mb-3'/>
                </div>
                <input value={user.question} onChange={ev => setUsers({...user, question: ev.target.value})} placeholder="Total question number" className='input input-accent w-full bg-[#f7f7f7] mb-3'/>
                <input value={user.correct} onChange={ev => setUsers({...user, correct: ev.target.value})} placeholder="Correct number" className='input input-accent w-full bg-[#f7f7f7] mb-3'/>
                <input value={user.incorrect} onChange={ev => setUsers({...user, incorrect: ev.target.value})} placeholder="Incorrect number" className='input input-accent w-full bg-[#f7f7f7] mb-3'/>
                <input value={user.blank} onChange={ev => setUsers({...user, blank: ev.target.value})} placeholder="blank number" className='input input-accent w-full bg-[#f7f7f7] mb-3'/>
                <input value={user.score} onChange={ev => setUsers({...user, score: ev.target.value})} placeholder="score" className='input input-accent w-full bg-[#f7f7f7] mb-3'/>
                <select value={user.type} onChange={ev => setUsers({...user, type: ev.target.value})} className="select select-accent  w-full bg-[#f7f7f7] mb-3 p-0 ps-4">
                    {cerTypeArray.map(t => (
                        <option  value={t.id} key={t.id}>{t.name}</option>
                    ))}
                </select>
                <div class='flex justify-between items-center '>
                    <lable className='w-[30%] text-accent'>Personal photo:</lable>
                    <input accept="image/*" type='file' onChange={ev => setUsers({...user, image: ev.target.files[0] })} placeholder="image" className='file-input file-input-bordered file-input-accent  w-[70%] bg-[#f7f7f7] mb-3' style={{padding:'0px'}}/>
                </div>
                <button className="btn btn-accent w-full m-auto">Save</button>
            </form>

            ) : <></>}
            {loading ?
            <div className="text-center">
                <span className="loading loading-infinity loading-lg text-accent"></span>
            </div> :
            userId ?
            <div className="card bg-white p-4 shadow-sm max-w-[500px] m-auto">
                <QRCodeBox cerUrl={userId}/>
            </div>
            :
            <></>}
        </div>
    </>
    )
}
