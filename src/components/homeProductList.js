
import {useState,useEffect} from 'react'
import ProductCard from './productCard'
import axios from 'axios';

export default function HomeProductList() {
    const [products,setProducts] = useState([]);

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            const {data} = await axios.get("https://ogami-api.vercel.app/api/product?&_limit=10")
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='HomeProductList'>
       
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap: "1rem"}}>

        {products.map(e => <ProductCard product={e} key={Math.random().toString(35).slice(2)}/>)}
        </div>
    </div>
  )
}