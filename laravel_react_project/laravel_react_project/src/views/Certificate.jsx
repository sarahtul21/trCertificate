
import { useEffect, useState } from 'react';
import cerLogo from '../assets/cerLogo.jpg';
import DownloadPDF from '../Components/DownloadPDF';
import QRCodeBox from '../Components/QRCodeBox';
import { useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';
import env from '../env';

function Certificate() {
    const {id} = useParams();
    const [user, setUsers] = useState({});
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
                    console.log(user)
                  })
                  .catch(() => {
                    setLoading(false)
                  })
              }, [])
        }


  return (
    <>
    {loading ? <>loading...</> :
    !user.id ? <>no certificate</> :
    <>
        <div className='flex justify-between items-center py-8 w-[90vw] m-auto'>
            <h1 className=' text-4xl text-accent'>Certificate {user.type}</h1>
            <DownloadPDF downloadFileName="CustomPdf" rootElementId="pdf" imageName={user.image}  />
        </div>
        {user.type === 1 ? 
        <div className='border-2 rounded border-accent py-8 mx-auto w-fit bg-white text-black'>
            <div id="pdf" className='w-[993px] h-[1404px] p-3 mx-auto'>
                <div className='flex flex-row justify-between items-center mb-8 mx-6'>
                    <img src={cerLogo} alt="cer" width='200px' />
                    <div className='text-center'>
                        <h2 className='text-4xl'>2022 ERÜYÖS</h2>
                        <h3 className='text-3xl'>SINAV SONUÇ BELGESİ</h3>
                        <p className=''>(Examination Result Document)</p>
                    </div>
                    <div className='w-[100px]'></div>
                </div>
                <div className='text-end  '>
                    <p>Erciyes Üniversitesi Yabancı Uyruklu Öğrenci Sınavı</p>
                    <p>(Erciyes University Examination for Foreign Students)</p>
                </div>
                <div className='mx-6 flex flex-row justify-evenly items-start mb-8 border-t-2 border-gray-200'>
                    <img src={env.API_LINK_STORAGE + user.image} alt="cer" width='150px' />
                    {/* env.API_LINK_STORAGE + user.image */}
                    <div>
                    <div className="overflow-x-auto">
                        <table className="table">

                            <tbody>
                            {/* row 1 */}
                            <tr className="border-gray-200 border-b-2">
                                <td className='w-[200px]'>
                                    <p className='font-bold'>Adı Soyadı</p>
                                    <p>Name Surname</p>
                                </td>
                                <td className='align-top pr-0 text-end'>:</td>
                                <td className='max-w-[200px] '>{user.name}</td>
                                <td>
                                    <p className='font-bold'>Başvuru No</p>
                                    <p>Application's ID</p>
                                </td>
                                <td className='align-top pr-0 text-end'>:</td>
                                <td>{user.application}</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="border-gray-200 border-b-2">
                                <td className='w-[200px]'>
                                    <p className='font-bold'>Pasaport No</p>
                                    <p>Passport Number</p>
                                </td>
                                <td className='align-top pr-0 text-end'>:</td>
                                <td className='max-w-[200px]'>{user.passport}</td>
                                <td>
                                    <p className='font-bold'>Sınav Tarihi</p>
                                    <p>Date of Exam</p>
                                </td>
                                <td className='align-top pr-0 text-end'>:</td>
                                <td>{user.exam}</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="border-gray-200 border-b-2">
                                <td className='w-[200px]'>
                                    <p className='font-bold'>Uyruk</p>
                                    <p>Nationality</p>
                                </td>
                                <td className='align-top pr-0 text-end'>:</td>
                                <td className='max-w-[200px]'>{user.nationality}</td>
                                <td>
                                    <p className='font-bold'>Belge No</p>
                                    <p>Document ID</p>
                                </td>
                                <td className='align-top pr-0 text-end'>:</td>
                                <td>{user.document}</td>
                            </tr>
                            {/* row 4 */}
                            <tr className="">
                                <td className='w-[200px]'>
                                    <p className='font-bold'>Doğum Tarihi</p>
                                    <p>Date of Birth</p>
                                </td>
                                <td className='align-top pr-0 text-end'>:</td>
                                <td className='max-w-[200px]'>{user.birth}</td>
                                <td>
                                    <p></p>
                                    <p></p>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                <div className="overflow-x-auto mx-3">
                    <table className="table text-black text-center border-gray-200">
                        <tbody className='border-2 border-gray-200'>
                        {/* row 1 */}
                            <tr className='border-b-2 border-gray-200'>
                                <td className='border-e-2 w-[250px]'></td>
                                <td className='border-e-2'>
                                    <p className='font-bold'>Soru Sayısı</p>
                                    <p>The number of Questions</p>
                                </td>
                                <td className='border-e-2'>
                                    <p className='font-bold'>Doğru Sayısı</p>
                                    <p>The number of Corrects</p>
                                </td>
                                <td className='border-e-2'>
                                    <p className='font-bold'>Yanlış Sayısı</p>
                                    <p>The number of Incorrects</p>
                                </td>
                                <td className='border-e-2'>
                                    <p className='font-bold'>Boş Sayısı</p>
                                    <p>The number of Blanks</p>
                                </td>
                                <td>
                                    <p className='font-bold'>Puan</p>
                                    <p>Score</p>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className='align-top border-e-2 text-start'>
                                    <p className='font-bold'>Temel Öğrenme Becerileri Testi</p>
                                    <p>Basic Learning Skills Test</p>
                                </td>
                                <td className='align-top border-e-2 font-bold'>{user.question}</td>
                                <td className='align-top border-e-2 font-bold'>{user.correct}</td>
                                <td className='align-top border-e-2 font-bold'>{user?.incorrect}</td>
                                <td className='align-top border-e-2 font-bold'>{user.blank}</td>
                                <td className='align-top font-bold'>{user.score}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <QRCodeBox cerUrl={user.id}/>
            </div>
        </div>
        :
        <></>
        } 

    </>
    }


    </>
  );
}

export default Certificate;
