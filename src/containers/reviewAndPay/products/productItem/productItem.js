import React,{Component} from 'react';
import './productItem.css';

export default class ProductItem extends Component{
    render(){
        return(
            <div className="productItemSection">
              <div className="imgSection">
               <img src={this.props.product.imgUrl} alt="productImage" />
              </div>
              <div className="productContent">
                <div className="prodName">
                    {this.props.product.name}
                </div>
                <div className="prodType">
                {this.props.product.type}
                </div>
                <div className="pricenQty">
                 SR  {this.props.product.price} X  {this.props.product.qty}
                </div>
                <div className="prodColor">
                {this.props.product.color}
                </div>
                <div className="prodDescription">
                {this.props.product.desc}
                </div>
                <div className="priceAndArticle">
                <div className="articleNum">
                    Article Number :  {this.props.product.articleNum}
                </div>
                <div className="priceTotal">
                    SR {parseInt(this.props.product.price) * parseInt(this.props.product.qty)}
                </div>
                </div>
              </div>
              
            </div>
        )
    }
}