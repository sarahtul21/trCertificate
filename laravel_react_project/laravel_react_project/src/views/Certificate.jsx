
import { useEffect, useState } from 'react';
import cerLogo from '../assets/cerLogo.jpg';
import person from '../assets/1725536501.jpg'
import DownloadPDF from '../Components/DownloadPDF';
import QRCodeBox from '../Components/QRCodeBox';
import { useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';
import env from '../env';

function Certificate() {
    const {application} = useParams();
    const [user, setUsers] = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const [userId , setUserId] = useState()



// console.log(application)
    if(application)
        {
            useEffect(() => {
                setLoading(true)
                axiosClient.get('/users')
                .then(({ data }) => {
                setLoading(false)
                const item = data.data.find((element) => element.application === application)
                // console.log(item)
                setUsers(item)

                })
                .catch(() => {
                setLoading(false)
                })
              }, [])
        }


  return (
    <>
    {loading ?
        <div className='h-screen grid place-items-center'>
            <span className="loading loading-infinity loading-lg text-accent"></span>
        </div> :
    // !user.application ?
    // <div className='text-center text-2xl text-red-500 h-screen grid place-items-center'>
    //     This ID has no certificate
    // </div> :
    <>
        <div className='flex justify-between items-center py-8 w-[90vw] m-auto'>

{/*             <DownloadPDF downloadFileName="CustomPdf" rootElementId="pdf" imageName={user.image}  /> */}
        </div>
        {/* {user.type == 1 ? */}
        <>
        <div className='py-8 mx-auto w-fit bg-white text-black'>
            <div id="pdf" className='p-1 mx-auto pdf-size pt-8'>
                <div className='flex flex-row justify-between items-center mb-8 mx-6'>
                    <img src={cerLogo} alt="cer" className='w-[30%]' />
                    <div className='text-center w-[70%] m-auto'>
                        <h2 className='text-[5vw] font-bold'>2022 ERÜYÖS</h2>
                        <h3 className='text-[4vw] font-bold'>SINAV SONUÇ BELGESİ</h3>
                        <p className='text-[2.3vw]'>(Examination Result Document)</p>
                    </div>
                </div>
                <div className='text-end  text-[1.5vw] pe-3'>
                    <p>Erciyes Üniversitesi Yabancı Uyruklu Öğrenci Sınavı</p>
                    <p>(Erciyes University Examination for Foreign Students)</p>
                </div>
                <div className='mx-6 flex flex-row justify-evenly items-start mb-8 border-t-2 border-gray-200'>
                    <img src={person} alt="cer" className='w-[23%] pt-6' />
                    {/* env.API_LINK_STORAGE + user.image */}
                    <div className="overflow-x-auto w-[70%]">
                        <table className="table text-[1.2vw]">

                            <tbody>
                            {/* row 1 */}
                            <tr className="border-gray-200 border-b-2">
                                <td className='w-fit px-0 py-[2vw]'>
                                    <p className='font-bold text-nowrap'>Adı Soyadı</p>
                                    <p className='text-nowrap'>Name Surname</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='max-w-[200px] ps-1 pe-[2vw] py-1'>MOHAMED ABO ALBESHR ABDOU SAAD</td>
                                <td className='px-0 py-[2vw] w-fit'>
                                    <p className='font-bold text-nowrap'>Başvuru No</p>
                                    <p className='text-nowrap' >Application's ID</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='px-0 py-[2vw]'>20930610957</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="border-gray-200 border-b-2 ">
                                <td className='max-w-[200px] px-0 py-[2vw] w-fit'>
                                    <p className='font-bold text-nowrap'>Pasaport No</p>
                                    <p className='text-nowrap' >Passport Number</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='max-w-[200px] px-0 py-[2vw]'>N00340787</td>
                                <td className='px-0 py-[2vw] w-fit'>
                                    <p className='font-bold text-nowrap'>Sınav Tarihi</p>
                                    <p className='text-nowrap'>Date of Exam</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='px-0 py-[2vw]'>2022-06-10</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="border-gray-200 border-b-2">
                                <td className='max-w-[200px] px-0 py-[2vw] w-fit'>
                                    <p className='font-bold'>Uyruk</p>
                                    <p>Nationality</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='max-w-[200px] px-0 py-[2vw]'>Suriye</td>
                                <td className='px-0 py-[2vw] w-fit'>
                                    <p className='font-bold text-nowrap'>Belge No</p>
                                    <p className='text-nowrap'>Document ID</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='px-0 py-[2vw]'>11976</td>
                            </tr>
                            {/* row 4 */}
                            <tr className="">
                                <td className='max-w-[200px] px-0 py-[2vw] w-fit'>
                                    <p className='font-bold text-nowrap'>Doğum Tarihi</p>
                                    <p className='text-nowrap'>Date of Birth</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='max-w-[200px] px-0 py-[2vw]'>2003-02-23</td>
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
                <div className="overflow-x-auto mx-3">
                    <table className="table text-black text-center border-gray-200 text-[1.5vw]">
                        <tbody className='border-2 border-gray-200'>
                        {/* row 1 */}
                            <tr className='border-b-2 border-gray-200'>
                                <td className='border-e-2 max-w-[250px] px-0 py-[2vw]'></td>
                                <td className='border-e-2 px-0 py-[2vw] '>
                                    <p className='font-bold'>Soru Sayısı</p>
                                    <p>The number of Questions</p>
                                </td>
                                <td className='border-e-2 px-0 py-[2vw]'>
                                    <p className='font-bold'>Doğru Sayısı</p>
                                    <p>The number of Corrects</p>
                                </td>
                                <td className='border-e-2 px-0 py-[2vw]'>
                                    <p className='font-bold'>Yanlış Sayısı</p>
                                    <p>The number of Incorrects</p>
                                </td>
                                <td className='border-e-2 px-0 py-[2vw]'>
                                    <p className='font-bold'>Boş Sayısı</p>
                                    <p>The number of Blanks</p>
                                </td>
                                <td className='px-1 py-1'>
                                    <p className='font-bold'>Puan</p>
                                    <p>Score</p>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className='align-top border-e-2 text-start ps-1 pe-0 py-1 w-fit'>
                                    <p className='font-bold text-nowrap'>Temel Öğrenme Becerileri Testi</p>
                                    <p className='text-nowrap'>Basic Learning Skills Test</p>
                                </td>
                                <td className='align-top border-e-2 font-bold px-0 py-[2vw]'>80</td>
                                <td className='align-top border-e-2 font-bold px-0 py-[2vw]'>76</td>
                                <td className='align-top border-e-2 font-bold px-0 py-[2vw]'>3</td>
                                <td className='align-top border-e-2 font-bold px-0 py-[2vw]'>1</td>
                                <td className='align-top font-bold px-0 py-[2vw]'>95</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <QRCodeBox cerUrl={20930610957}/>
            </div>
        </div>
        <div className='h-8'></div>
        </>
        {/* :
        <></>
        } */}

    </>
    }


    </>
  );
}

export default Certificate;
