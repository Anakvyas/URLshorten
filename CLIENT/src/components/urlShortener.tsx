import { useState } from 'react';
import './style.css';
import { Copy } from 'lucide-react';
import load from '../../public/loading.json'
import Lottie from 'lottie-react';
import axios from 'axios';
const UrlShortener = () => {

    const [url, seturl] = useState("");
    const [generating, setgenerating] = useState(false);
    const [shorturl, setshorturl] = useState("");

    const handleclick = async () => {
        setgenerating(true);
        try {
            setTimeout(async () => {
                const res = await axios.post('http://localhost:3000/shorten', { url });

                const data = res.data;
                setshorturl(data.shorturl);
                setgenerating(false);
            }, 3000)

        } catch (e: any) {
            console.log(e.message);
            setgenerating(false);
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(shorturl)
            .then(() => alert('Copied to clipboard!'))
            .catch((err) => console.error('Failed to copy: ', err));
    };



    return (
        <div className='container'>
            <div className='box'>
                <input type='text' placeholder='ex - http://example.com' value={url} onChange={(e) => seturl(e.target.value)}></input>
                {
                    generating ? (
                        <button className='gen loading'>
                            <Lottie animationData={load} loop={true} style={{ height: 70, width: 190 }} />
                            <span className="gen-text">Generating...</span>
                        </button>
                    ) : (
                        shorturl != "" ? <> <div className='newurl'>
                            <div className='url'>{shorturl}</div>
                            <button className='copy' onClick={handleCopy}><Copy /></button>
                        </div> <button className='gen' onClick={()=> setshorturl("")} style={{marginTop:"2rem"}}>Re Generate</button> </>: <button className='gen' onClick={handleclick}>Generate</button>
                    )
                }


                


            </div>
        </div>
    );
}

export default UrlShortener;
