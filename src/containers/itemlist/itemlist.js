import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, getProfile, setSelectedProduct } from '../../actions';
import { bindActionCreators } from 'redux';
import { getLocalData,setLocalData } from '../../utilities/utility';
import appConstants from '../../constants';
import {Link} from 'react-router-dom';


const list = {
    "products": [
        {
            "name": "VÄRDERA",
            "type": "Mug",
            "qty": "2",
            "price": "9",
            "imgUrl": "https://secure.ikea.com/PIAimages/51249_PE150726_S3.jpg",
            "color": "White",
            "desc": "Height: 11 cm, Volume: 30 cl",
            "articleNum": " 102.773.66"
        },
        {
            "name": "LACK",
            "type": "Wall shelf",
            "qty": "1",
            "price": "39",
            "imgUrl": "https://secure.ikea.com/PIAimages/0641085_PE700249_S3.JPG",
            "color": "Black",
            "desc": "Length: 110 cm, Depth: 26 cm, Thickness: 5 cm",
            "articleNum": "401.036.33"
        }
    ]
}

class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProducts();

    }
    setSelectedProduct = (itemdetail) => {
        console.log("itemdetail", itemdetail);
        const items = {
            products:[]
        };
        items.products.push(itemdetail);
        setLocalData(appConstants.PRODUCT_LIST,items);
        this.props.setSelectedProduct(itemdetail);
        
    }
    renderList() {
        const productData = getLocalData(appConstants.PRODUCT_LIST);
        console.log("productdetails", productData);
        if (productData === null) return <div>No Products Added</div>
        return productData.products.map(itemdetail => {
            return (
                <Link href="#" to="checkout/delivery/" key={itemdetail.name}  className="list-group-item list-group-item-action flex-column align-items-start" onClick={() => this.setSelectedProduct(itemdetail)} >
                    <div className="d-flex w-100 justify-content-between">
                        <img className="img-fluid imgHeightWidth" style={{ height: "60px" }} src={itemdetail.imgUrl}>
                        </img>
                        <h5>{itemdetail.type}</h5>
                        <label className="mb-1">{itemdetail.desc}</label>
                    </div>
                    <p className="mb-1">{itemdetail.name}</p>
                    <label>{itemdetail.color}</label>
                </Link>
            )
        })
    }

    render() {
        return (
            <div className="list-group">
                {this.renderList()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProducts: getProducts,
        getProfile: getProfile,
        setSelectedProduct: setSelectedProduct
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        productList: state.getProducts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);