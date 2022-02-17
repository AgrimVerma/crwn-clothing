const INITIAL_STATE = {
    section: [
        {
            title: 'Sneakers',
            imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'Jackets',
            imageurl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'Sneakers',
            imageurl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'Men',
            imageurl: 'https://i.ibb.co/R70vBrQ/men.png',
            id: 4,
            size: 'large',
            linkUrl: 'shop/mens'
        },
        {
            title: 'Women',
            imageurl: 'https://i.ibb.co/GCCdy8t/women.png',
            id: 5,
            size: 'large',
            linkUrl: 'shop/womens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
};

export default directoryReducer;