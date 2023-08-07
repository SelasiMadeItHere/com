import React, { useState, useEffect } from 'react'
import RegistrarDash from '../../components/RegistrarDash'
import axios from 'axios';
import Navbar from '../../components/Navbar'
import Badges from '../../components/Badges'
import ActivityCard from '../../components/ActivityCard';
import { ChartBarIcon, ChartBarSquareIcon, ChartPieIcon } from '@heroicons/react/20/solid'
import Charts from '../../components/Charts';




function Registrar() {

    //PENDING REQUESTS
    const [transs, setTrans] = useState([]);
    const [defers, setDefer] = useState([]);
    const [intros, setIntro] = useState([]);
    const [cards, setCards] = useState([]);
    // const [Certificates, setCertificates] = useState([]); To be updated when hosted live*************************
    const [totalPending, setTotalPending] = useState(0);

    const loadTrans = async () => {
        const response = await axios.get("http://localhost:5002/api/gettranscript");
        setTrans(response.data);
    };
    const loadDefer = async () => {
        const response = await axios.get("http://localhost:5002/api/getdeferment");
        setDefer(response.data);
    };
    const loadIntro = async () => {
        const response = await axios.get("http://localhost:5002/api/getIntro");
        setIntro(response.data);
    };
    const loadCard = async () => {
        const response = await axios.get("http://localhost:5002/api/getCard");
        setCards(response.data);
    }

    useEffect(() => {
        loadTrans();
        loadDefer();
        loadIntro();
        loadCard();
        const totalPending = transs.length + defers.length + cards.length + intros.length;
        setTotalPending(totalPending);
    }, [transs.length, defers.length, cards.length, intros.length,
    ]);




    // VERIFIED REQUESTS
    const [Vtranss, setVTrans] = useState([]);
    const [Vdefers, setVDefer] = useState([]);
    const [Vintros, setVIntro] = useState([]);
    const [Vcards, setVCards] = useState([]);
    const [totalVerified, setTotalVerified] = useState(0);

    const loadVIntro = async () => {
        const response = await axios.get("http://localhost:5002/api/Intro/getfinapproved");
        setVIntro(response.data);
    };

    const loadVTrans = async () => {
        const response = await axios.get("http://localhost:5002/api/getfinanceapprovedtranscripts");
        setVTrans(response.data);
    };
    const loadVDefer = async () => {
        const response = await axios.get("http://localhost:5002/api/reggetdeferment");
        setVDefer(response.data);
    };
    const loadVCards = async () => {
        const response = await axios.get("http://localhost:5002/api/finishedcards");
        setVCards(response.data);
    };
    // const loadData = async () => {
    //     const response = await axios.get("http://localhost:5002/api/getIntro");
    //     setData(response.data);
    // };


    useEffect(() => {
        loadVTrans();
        loadVDefer();
        loadVIntro();
        loadVCards();
        const totalVerified = Vtranss.length + Vdefers.length + Vcards.length + Vintros.length;
        setTotalVerified(totalVerified);
    }, [Vtranss.length, Vdefers.length, Vcards.length, Vintros.length,
    ]);


    //PROCESSED REQUESTS
    const [Ptranss, setPTrans] = useState([]);
    const [Pdefers, setPDefer] = useState([]);
    const [Pintros, setPIntro] = useState([]);
    const [Pcards, setPCards] = useState([]);
    const [totalProcessed, setTotalProcessed] = useState(0);

    const loadPIntro = async () => {
        const response = await axios.get("http://localhost:5002/api/Intro/RegProcessed");
        setPIntro(response.data);
    };

    const loadPTrans = async () => {
        const response = await axios.get("http://localhost:5002/api/RegProcessedTrans");
        setPTrans(response.data);
    };
    const loadPDefer = async () => {
        const response = await axios.get("http://localhost:5002/api/RegProcessedDefer");
        setPDefer(response.data);
    };
    const loadPCards = async () => {
        const response = await axios.get("http://localhost:5002/api/finishedcards");
        setPCards(response.data);
    };

    // const loadData = async () => {
    //     const response = await axios.get("http://localhost:5002/api/getIntro");
    //     setData(response.data);
    // };


    useEffect(() => {
        loadPTrans();
        loadPDefer();
        loadPIntro();
        loadPCards();
        const totalProcessed = Ptranss.length + Pdefers.length + Pcards.length + Pintros.length;
        setTotalProcessed(totalProcessed);
    }, [Ptranss.length, Pdefers.length, Pcards.length, Pintros.length,
    ]);








    return (
        <div className=' bg-slate-200 min-h-screen'>
            <div>
                <Navbar />
            </div>

            <div className=' grid grid-cols-4 pt-24 ml-6'>
                <div className=' col-span-4 m-6 text-2xl font-bold'>
                    <h2>Stats</h2>
                </div>
                <div className=' col-start-5'>
                    <Badges />
                </div>
            </div>


            <div className='px-5 py-3'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 py-3 px-6'>
                    <ActivityCard Icon={ChartBarIcon} text="Pending Requests" number={totalPending} />
                    <ActivityCard Icon={ChartPieIcon} text="Verified Requests" number={totalVerified} />
                    <ActivityCard Icon={ChartBarSquareIcon} text="Processed Requests" number={totalProcessed} />
                    {/* <ActivityCard Icon={DocumentChartBarIcon} text="Total-Earning" number={1000} /> */}
                </div>
            </div>

            <div className=' grid grid-cols-4 pt-24 ml-6'>
                <div className=' col-span-4 m-6 text-2xl font-bold'>
                    <h2>Charts</h2>
                </div>
                <div className=' flex grid-cols-2 lg:grid-cols-3 gap-3 py-3 px-6'>
                    <Charts/>
                </div>
            </div>



            <div className=' grid grid-cols-4 pt-24 ml-6'>
                <div className=' col-span-4 m-6 text-2xl font-bold'>
                    <h2>Services</h2>
                </div>
            </div>

            <div className=' px-28 grid lg:grid-cols-4 gap-4 rounded-lg md:grid-cols-2' >
                <div className=' hover:shadow-xl delay-200'>
                    <RegistrarDash image={require('../../assets/imgs/messages.png')} title='INTRODUCTORY LETTER REQUESTS'
                        badge={'VIEW'} link={'/introductoryapproval'} />
                </div>

                <div className=' hover:shadow-xl delay-150'>
                    <RegistrarDash image={require('../../assets/imgs/3d-documents.png')} title='CERTIFICATE REQUESTS'
                        badge={'VIEW'} link={'/certapproval'} />
                </div>

                <div className=' hover:shadow-xl delay-150'>
                    <RegistrarDash image={require('../../assets/imgs/no-pic.png')} title='TRANSCRIPT REQUESTS'
                        badge={'VIEW'} link={'/transcriptapproval'} />
                </div>

                <div className=' hover:shadow-xl delay-150'>
                    <RegistrarDash image={require('../../assets/imgs/3d-megaphone.png')} title='DEFERMENT REQUESTS'
                        badge={'VIEW'} link={'/registrardeferment'} />
                </div>
            </div>


        </div>
    )
}

export default Registrar