import axios from "axios";

export const totalProduct = async (category) =>{
    const res = await axios.get('http://localhost:5000/productCount', {params: {category}})

    console.log('count in func =', res.data.count);
    return res.data.count;

}