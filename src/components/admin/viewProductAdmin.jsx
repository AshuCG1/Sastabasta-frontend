import  Button  from "../Button"
import "../customer/viewProduct"


const ViewProductAdmin = () => {
    return(
        <div className="cust-view">
            <div className="cust-product">
                <img src="https://images.pexels.com/photos/2376993/pexels-photo-2376993.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="product-box">
                <h4>Amazon</h4>
                <form action="">
                    <input type="text" placeholder="MRP"/>
                    <input type="text" placeholder="MRP"/>
                    <input type="text" placeholder="MRP"/>
                </form>
            </div>
            <div className="product-box">
                <h4>Myntra</h4>
                <form action="">
                    <input type="text" placeholder="MRP"/>
                    <input type="text" placeholder="MRP"/>
                    <input type="text" placeholder="MRP"/>
                </form>
            </div>
            <div className="product-box">
                <h4>Flipkart</h4>
                <form action="">
                    <input type="text" placeholder="MRP"/>
                    <input type="text" placeholder="MRP"/>
                    <input type="text" placeholder="MRP"/>
                </form>
            </div>
            <Button value="Update"/>
        </div>
    )
}

export default ViewProductAdmin
