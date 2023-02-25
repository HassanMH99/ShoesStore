import { CardProduct } from './CardProduct'
import './ProductPage.css'
import React,{useState,useEffect} from "react"
import axios from 'axios'
export function ProductPage(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get('https://63f7738fe40e087c958f2bf7.mockapi.io/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
        return (
            <div className='ProductPage'>
                <nav className='Nav-ProductPage'>
                    <h1>Welcome To Produt Page</h1>
                    
                </nav>
               
                    <CardProduct products={products}/>
                
            </div>

        )
    }