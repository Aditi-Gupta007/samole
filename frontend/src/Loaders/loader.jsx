import axios from 'axios'

const productLoader=async ({params})=>
{
    const {id}=params;
    try {
        const res=await axios.get(`http://localhost:8000/api/plant/${id}`);
        console.log(res)
        if(res.data.success) 
        {
            console.log(res.data.product)
            return res.data.product
        }
   } catch (error) {
    console.log(error)
   }
}

export {productLoader}