import React from 'react';

const ImageCard = (props) => {
    const { farm, id, server, title, secret } = props.image;
    return(
        <li>
            <img alt={title} src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} />
        </li>
    )
};

export default ImageCard;
