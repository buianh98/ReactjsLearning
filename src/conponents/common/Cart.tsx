
import React from 'react'
import { ICart } from './../../models/cart'

interface IProps {
    listCart: ICart[];
}

export default function Cart(props: IProps): any {

    const { listCart } = props;
    const renderListCartToLayout = (): any => {
        return listCart.map(item => {
            return (
                <tr key={item.id}>
                    <th>{item.id}</th>
                    <th>{item.name}</th>
                    <th><img src={item.imageUrl} alt="" style={{ width: 100, height: 100 }} /></th>
                    <th>{item.priceItem}</th>
                    <th>{item.quantity}</th>
                    <th>{item.totalPrice}</th>
                    <th></th>
                </tr>
            )
        })
    }

    return (
        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document" style={{ minWidth: 800 }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">List Cart</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderListCartToLayout()}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

