import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import CollectionFeatured from '../CollectionFeatured/CollectionFeatured';
import CreateAndSell from '../CreateAndSell/CreateAndSell';
import Discover from '../Discover/Discover';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collection></Collection>
            <CollectionFeatured></CollectionFeatured>
            <CreateAndSell></CreateAndSell>
            <Discover></Discover>
        </div>
    );
};

export default Home;