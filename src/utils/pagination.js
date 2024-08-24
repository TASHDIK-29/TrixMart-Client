import axios from "axios";

export const totalProduct = async (category) =>{
    const res = await axios.get('https://trixtern-e-commerce-server.vercel.app/productCount', {params: {category}})

    console.log('count in func =', res.data.count);
    return res.data.count;

}