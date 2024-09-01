import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axiosClient";
import QRCodeBox from "../Components/QRCodeBox";

export default function UserForm(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [selectedCerType,setSelectedCerType] = useState('')
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
        } else {
          axiosClient.post('/users', user)
            .then(() => {
            //   navigate('/users')
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
      {!user.id && <h1 className=" text-4xl text-accent mb-8">New student</h1>}
      <div className="card animated fadeInDown max-w-[500px] m-auto">
        {loading && (
          <div className="text-center">
            Loading...
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
          <form onSubmit={onSubmit}>
            <input value={user.name} onChange={ev => setUsers({...user, name: ev.target.value})} placeholder="Full name"/>
            <input value={user.passport} onChange={ev => setUsers({...user, passport: ev.target.value})} placeholder="Passport number"/>
            <input value={user.application} onChange={ev => setUsers({...user, application: ev.target.value})} placeholder="Application ID"/>
            <input value={user.document} onChange={ev => setUsers({...user, document: ev.target.value})} placeholder="Document ID"/>
            <input value={user.nationality} onChange={ev => setUsers({...user, nationality: ev.target.value})} placeholder="Nationality"/>
            <input value={user.birth} onChange={ev => setUsers({...user, birth: ev.target.value})} placeholder="Date of birth"/>
            <input value={user.exam} onChange={ev => setUsers({...user, exam: ev.target.value})} placeholder="Date of exam"/>
            <input value={user.question} onChange={ev => setUsers({...user, question: ev.target.value})} placeholder="Total question number"/>
            <input value={user.correct} onChange={ev => setUsers({...user, correct: ev.target.value})} placeholder="Correct number"/>
            <input value={user.incorrect} onChange={ev => setUsers({...user, incorrect: ev.target.value})} placeholder="Incorrect number"/>
            <input value={user.blank} onChange={ev => setUsers({...user, blank: ev.target.value})} placeholder="blank number"/>
            <input value={user.score} onChange={ev => setUsers({...user, score: ev.target.value})} placeholder="score"/>
            <select value={user.type} onChange={ev => setUsers({...user, type: ev.target.value})} className="select bg-[#ddddde] p-0">
                {cerTypeArray.map(t => (
                    <option  value={t.id} key={t.id}>{t.name}</option>
                ))}
            </select>
            <input accept="image/*" type='file' onChange={ev => setUsers({...user, image: ev.target.files[0] })} placeholder="image" className='file-input file-input-bordered file-input-accent bg-[#ddddde]' style={{padding:'0px'}}/>
            <button className="btn btn-accent">Save</button>
          </form>

        ) : <></>}
         {loading ?
        <div className="text-center">
            Loading...
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
