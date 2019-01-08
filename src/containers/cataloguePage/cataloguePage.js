import React from 'react';
import './cataloguePage.css';
import Carousel from './carousel/carousel';
import ItemList from './itemList/itemList';
export default function CataloguePage(){
    return(
        <div>
            <div>
                ----------catalogue page here-----------
                <Carousel />
                <ItemList />
            </div>
        </div>
    )
}