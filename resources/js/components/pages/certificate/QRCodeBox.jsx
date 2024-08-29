import { useEffect, useState } from 'react';

import QRCode from 'qrcode'

function QRCodeBox() {

    const [src,setSrc] = useState('')
    const linkURL = 'https://sarahtul21.github.io/BisConnect'

    useEffect(()=>{
        QRCode.toDataURL(linkURL).then((data)=>{
            setSrc(data)
        });
    },[])


  return (
                <div className='flex justify-stretch items-center my-6'>
                    <div className=''>
                        <img src={src} alt="QRCode" width='250px' />
                    </div>
                    <div className=''>
                        <p>Bu belgeyi</p>
                        <p><span className='font-bold'>{linkURL + ' '}</span>adresinden doğrulayabilirsiniz</p>
                    </div>
                </div>
  );
}

export default QRCodeBox;
