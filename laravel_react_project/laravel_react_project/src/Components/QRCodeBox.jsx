import { useEffect, useState } from 'react';

import QRCode from 'qrcode'

function QRCodeBox({cerUrl}) {

    const [src,setSrc] = useState('')
    const linkURL = 'https://www.eryoserciyes-edu-tr.pro/certificate/'

    useEffect(()=>{
        QRCode.toDataURL(linkURL).then((data)=>{
            setSrc(data)
        });
    },[])


  return (
                <div className='flex justify-stretch items-center my-6 text-[1.5vw]'>
                    <div className=''>
                        <img src={src} alt="QRCode" className='w-[30vw]' />
                    </div>
                    <div className=''>
                        <p>Bu belgeyi</p>
                        <p><span className='font-bold'>{linkURL + cerUrl + ' '}</span>adresinden doğrulayabilirsiniz</p>
                    </div>
                </div>
  );
}

export default QRCodeBox;
