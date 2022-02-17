import React from "react";

import './collections-overview.styles.scss';

/*import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";*/

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors"

import { useSelector } from 'react-redux';

const CollectionOverview = () => {
    const collections = useSelector((state) => selectCollections(state))
    return(
    <div className="collection-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)};

/*const mapStateToProps = state => ({
    collections: selectCollections(state)
})*/

export default CollectionOverview;