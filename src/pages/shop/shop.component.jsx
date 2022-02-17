import React from "react";

import { Route, Routes } from "react-router";

import './shop.styles.scss';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from "../../components/Collection/collection.component";

const ShopPage =() => (
    <div className="shop-name">
        <Routes>
            <Route path="/" element={<CollectionOverview />} />
            <Route path=":collectionId" element={<CollectionPage />} />
        </Routes>
    </div>
);

export default ShopPage;