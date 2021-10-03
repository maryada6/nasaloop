import axios from 'axios';

export  const coin = async(limit)=>{
    const res = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit}&currency=INR`);
    console.log(res.data.coins);
    return res.data.coins;
}

