import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axiosClient";

export default function UserForm(){
    // const {id} = useParams();
    // const [allUsers,setAllUsers] = useState([])
    const [selectedCerType,setSelectedCerType] = useState('')
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
    const [user, setUser] = useState({
        id: '13',
        name: '',
        passportNum: '',
        applicationID: '',
        examDate: '',
        nationality: '',
        documentID: '',
        birthDate: '',
        questionsNum: '',
        correctsNum: '',
        inCorrectsNum: '',
        blanksNum: '',
        score: '',
        cerType: '',
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    // if(id)
    // {
    //     useEffect(() => {
    //         setLoading(true)
    //         axiosClient.get(`/users/${id}`)
    //           .then(({data}) => {
    //             setLoading(false)
    //             setUser(data)
    //           })
    //           .catch(() => {
    //             setLoading(false)
    //           })
    //       }, [])
    // }

    const onSubmit = ev => {
        ev.preventDefault()
        // if (user.id) {
        //   axiosClient.put(`/users/${user.id}`, user)
        //     .then(() => {
        //       navigate('/users')
        //     })
        //     .catch(err => {
        //       const response = err.response;
        //       if (response && response.status === 422) {
        //         setErrors(response.data.errors)
        //       }
        //     })
        // } else {
            axiosClient.post('/users', user)
            .then(() => {
            //   navigate('')
            alert('done')
            })
            .catch(err => {
              const response = err.response;
              if (response && response.status === 422) {
                setErrors(response.data.errors)
              }
            })
        // }
      }

    //   useEffect(() => {
    //     axiosClient.get('/users')
    //       .then(({data}) => {
    //          setAllUsers(data)
    //          setLoading(true)
    //          console.log(allUsers)
    //       })
    //   }, [])

    return(
    <>
      {/* {user.id && <h1>Update User: {user.name}</h1>} */}
      {/* {!user.id && } */}
      <h1>New Student</h1>
      <div className="card animated fadeInDown">
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
        {!loading && (
          <form onSubmit={onSubmit}>
            <input value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} placeholder="Name" className="input bg-[#ddddde]"/>
            <input value={user.applicationID} onChange={ev => setUser({...user, applicationID: ev.target.value})} placeholder="Application ID" className="input bg-[#ddddde]"/>
            <label className="input mb-[15px] bg-[#ddddde] flex items-center gap-2">
                Date of birth:
                <input type='date' value={user.birthDate} onChange={ev => setUser({...user, birthDate: ev.target.value})} placeholder="Date of Birth" className="grow m-0 w-fit border-[0px]"/>
            </label>
            <input value={user.documentID} onChange={ev => setUser({...user, documentID: ev.target.value})} placeholder="Document ID" className="input bg-[#ddddde]"/>
            <label className="input mb-[15px] bg-[#ddddde] flex items-center gap-2">
                Date of Exam:
                <input type='date' value={user.examDate} onChange={ev => setUser({...user, examDate: ev.target.value})} placeholder="Date of Exam" className="grow m-0 w-fit border-[0px]"/>
            </label>
            <input value={user.nationality} onChange={ev => setUser({...user, nationality: ev.target.value})} placeholder="Nationality" className="input bg-[#ddddde]"/>
            <input value={user.passportNum} onChange={ev => setUser({...user, passportNum: ev.target.value})} placeholder="Passport Number" className="input bg-[#ddddde]"/>
            <input value={user.questionsNum} onChange={ev => setUser({...user, questionsNum: ev.target.value})} placeholder="Questions Number" className="input bg-[#ddddde]"/>
            <input value={user.correctsNum} onChange={ev => setUser({...user, correctsNum: ev.target.value})} placeholder="Corrects Number" className="input bg-[#ddddde]"/>
            <input value={user.inCorrectsNum} onChange={ev => setUser({...user, inCorrectsNum: ev.target.value})} placeholder="InCorrects Number" className="input bg-[#ddddde]"/>
            <input value={user.blanksNum} onChange={ev => setUser({...user, blanksNum: ev.target.value})} placeholder="blanks Number" className="input bg-[#ddddde]"/>
            <input value={user.score} onChange={ev => setUser({...user, score: ev.target.value})} placeholder="score" className="input bg-[#ddddde]"/>
            <select value={selectedCerType} onChange={ev => setUser({...user, cerType: ev.target.value})} className="select bg-[#ddddde]">

                {cerTypeArray.map(t => (
                    <option onClick={()=>setSelectedCerType(t.id)} value={t.id} key={t.id}>{t.name}</option>
                ))}
            </select>
            {/* <input type='file' value={user.image} onChange={ev => setUser({...user, image: ev.target.value})} placeholder="image" className='file-input file-input-bordered file-input-accent bg-[#ddddde]'/> */}

            <button className="btn btn-accent">Save</button>
          </form>
        )}
      </div>
    </>
    )
}
