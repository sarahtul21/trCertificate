import { useEffect, useState } from 'react';

import QRCode from 'qrcode'

function QRCodeBoxForTable({cerUrl}) {

    const [src,setSrc] = useState('')
    const linkURL = 'https://www.eryoserciyes-edu-tr.pro/belge/SonucBelgesi/BasvuruNo/'

    useEffect(()=>{
        QRCode.toDataURL(linkURL+cerUrl).then((data)=>{
            setSrc(data)
        });
    },[])


  return (
                <div className='flex justify-stretch items-center my-6 text-[1.5vw]'>
                    <div className=''>
                        <img src={src} alt="QRCode" className='w-[80px]' />
                    </div>
                </div>
  );
}

export default QRCodeBoxForTable;
