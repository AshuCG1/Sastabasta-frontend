import  Button  from "../Button"
import "./viewProduct.css"


const ViewProduct = () => {
    return(
        <div className="cust-view">
            <div className="cust-product">
                <img src="https://images.pexels.com/photos/2376993/pexels-photo-2376993.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="product-box">
                <h4>Amazon</h4>
                <ul>
                    <hr />
                    <li>MRP</li>
                    <li>Discount</li>
                    <li>SP</li>
                    <hr />
                    <li>Total</li>
                    <hr />
                    <Button value="Buy"/>
                </ul>
            </div>
            <div className="product-box">
                <h4>Myntra</h4>
                <ul>
                    <hr />
                    <li>MRP</li>
                    <li>Discount</li>
                    <li>SP</li>
                    <hr />
                    <li>Total</li>
                    <hr />
                    <Button value="Buy"/>
                </ul>
            </div>
            <div className="product-box">
                <h4>Flipkart</h4>
                <ul>
                <hr />
                    <li>MRP</li>
                    <li>Discount</li>
                    <li>SP</li>
                    <hr />
                    <li>Total</li>
                    <hr />
                    <Button value="Buy"/>
                </ul>
            </div>
        </div>
    )
}

export default ViewProduct
