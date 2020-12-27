import { type } from 'os'
import React, { FunctionComponent } from 'react'
import { IProduct } from '../../models/product'

interface MainProps {
    productList: IProduct[];
    addToCart: Function;
}

export default function Main(props: MainProps) {
    let { productList, addToCart } = props;
    const renderProuctToMain = () => {
        return productList.map((item, index) => {
            return (
                <div className="col-3" key={item.id}>
                    <div className="card text-left" >
                        <img className="card-img-top" src={item.imageUrl} alt="" style={{ width: 200, height: 250 }} />
                        <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">{item.quantity}</p>
                            <p className="card-text">{item.price}</p>
                            <button className="btn btn-outline-primary my-2 my-sm-0 float-right" type="button" onClick={() => addToCart(item)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="container mt-5">
            <h2>All the phone in 2020</h2>
            <div className="row mt-2">
                {renderProuctToMain()}
            </div>
        </div>
    )
}
