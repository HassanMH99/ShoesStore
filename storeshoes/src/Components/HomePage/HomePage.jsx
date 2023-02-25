import { Link } from 'react-router-dom'
import './HomePage.css'
export function HomePage(){
    const goToStoreAge =()=>{
        window.location.href="/product"
    }

    return <div className="HomePage">
        <button className="HomePage-button"><a href="/products">Go To Store</a></button>
    </div>
}