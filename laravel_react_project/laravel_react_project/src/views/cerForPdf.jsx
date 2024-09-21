
import cerLogo from '../assets/cerLogo.jpg';
import person from '../assets/1725536501.jpg'
import QRCodeBox from '../Components/QRCodeBox';

function CerForPdf({user}) {
  return (
        user.type == 1 ?
        <div className='py-8 mx-auto  bg-white text-black'>
            <div id="pdf" className='p-1 mx-auto pdf-size pt-8'>
                <div className='flex flex-row justify-between items-center mb-8 mx-6'>
                    <img src={cerLogo} alt="cer" className='w-[30%]' />
                    <div className='text-center w-[70%] m-auto'>
                        <h2 className='text-4xl font-bold'>2022 ERÜYÖS</h2>
                        <h3 className='text-3xl font-bold'>SINAV SONUÇ BELGESİ</h3>
                        <p className='text-xl'>(Examination Result Document)</p>
                    </div>
                </div>
                <div className='text-end pe-3'>
                    <p>Erciyes Üniversitesi Yabancı Uyruklu Öğrenci Sınavı</p>
                    <p>(Erciyes University Examination for Foreign Students)</p>
                </div>
                <div className='mx-6 flex flex-row justify-evenly items-start mb-8 border-t-2 border-gray-200'>
                    <img src={person} alt="cer" className='w-[23%] pt-6' />
                    {/* env.API_LINK_STORAGE + user.image */}
                    <div className="overflow-x-auto w-[70%]">
                        <table className="table ">

                            <tbody>
                            {/* row 1 */}
                            <tr className="border-gray-200 border-b-2">
                                <td className='w-fit px-0 py-[2vw]'>
                                    <p className='font-bold text-nowrap'>Adı Soyadı</p>
                                    <p className='text-nowrap'>Name Surname</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='max-w-[200px] ps-1 pe-[2vw] py-1'>{user.name}</td>
                                <td className='px-0 py-[2vw] w-fit'>
                                    <p className='font-bold text-nowrap'>Başvuru No</p>
                                    <p className='text-nowrap' >Application's ID</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='px-0 py-[2vw]'>{user.application}</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="border-gray-200 border-b-2 ">
                                <td className='max-w-[200px] px-0 py-[2vw] w-fit'>
                                    <p className='font-bold text-nowrap'>Pasaport No</p>
                                    <p className='text-nowrap' >Passport Number</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='max-w-[200px] px-0 py-[2vw]'>{user.passport}</td>
                                <td className='px-0 py-[2vw] w-fit'>
                                    <p className='font-bold text-nowrap'>Sınav Tarihi</p>
                                    <p className='text-nowrap'>Date of Exam</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='px-0 py-[2vw]'>{user.exam}</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="border-gray-200 border-b-2">
                                <td className='max-w-[200px] px-0 py-[2vw] w-fit'>
                                    <p className='font-bold'>Uyruk</p>
                                    <p>Nationality</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='max-w-[200px] px-0 py-[2vw]'>{user.nationality}</td>
                                <td className='px-0 py-[2vw] w-fit'>
                                    <p className='font-bold text-nowrap'>Belge No</p>
                                    <p className='text-nowrap'>Document ID</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='px-0 py-[2vw]'>{user.document}</td>
                            </tr>
                            {/* row 4 */}
                            <tr className="">
                                <td className='max-w-[200px] px-0 py-[2vw] w-fit'>
                                    <p className='font-bold text-nowrap'>Doğum Tarihi</p>
                                    <p className='text-nowrap'>Date of Birth</p>
                                </td>
                                <td className='align-top w-2 text-center px-0 py-[2vw]'>:</td>
                                <td className='max-w-[200px] px-0 py-[2vw]'>{user.birth}</td>
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
                                <td className='align-top border-e-2 font-bold px-0 py-[2vw]'>{user.question}</td>
                                <td className='align-top border-e-2 font-bold px-0 py-[2vw]'>{user.correct}</td>
                                <td className='align-top border-e-2 font-bold px-0 py-[2vw]'>{user.incorrect}</td>
                                <td className='align-top border-e-2 font-bold px-0 py-[2vw]'>{user.blank}</td>
                                <td className='align-top font-bold px-0 py-[2vw]'>{user.score}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <QRCodeBox cerUrl={user.application}/>
            </div>
        </div>
        : 
        <></>
  );
}

export default CerForPdf;
