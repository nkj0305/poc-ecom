import React,{Component} from 'react';
import './itemList.css';
import Item from './item/item';
export default class ItemList extends Component{
    render(){
        return(
            <div>
                <div>
                    --------------Item list Component here------------
                    <Item />
                </div>
            </div>

        );
    }
}