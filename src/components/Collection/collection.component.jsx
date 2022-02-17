import React from "react";

import './collection.styles.scss';

import CollectionItem from "../collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector((state) => selectCollection(collectionId)(state))
    console.log(collection)
    const { title, items } = collection
    return(
    <div className="collection-page">
        <h2 className="title">{ title }</h2>
        <div className="items">
            {
                items.map(item =>(
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)};

export default CollectionPage;