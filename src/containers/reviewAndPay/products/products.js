import React,{Component} from  'react';
import './products.css';
import {getLocalData} from '../../../utilities/utility'
import appConstants from '../../../constants';
import ProductItem from './productItem/productItem';
export default class Products extends Component{
    constructor(props){
     super(props);
     this.getProductList = this.getProductList.bind(this);
    }


    getProductList(){
      const productList = getLocalData(appConstants.PRODUCT_LIST);
      console.log(productList.products)
      return productList.products.map((product)=>{
          return(
              <ProductItem key={product.articleNum} product={product}/>
          )
      })
    //   this.setState({productList:productList.products})
    }
    render(){
        return(
            <div className="productListSection">
              <div className="productsHeading">
                Products
              </div>
              {this.getProductList()}
            </div>
        );
    }
}