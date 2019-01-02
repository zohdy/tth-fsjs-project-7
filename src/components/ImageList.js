import React from 'react';
import ImageCard from './ImageCard';



class ImageList extends React.Component {
    render() {
        const images = this.props.images.map(image => {
            return <ImageCard key={image.id} image={image} />
        });

        const renderHeader = () => {
            // When the page is initialized
            if(images.length === 0){
                return '';
            } else {
                return `${this.props.searchTerm} imgs`;
            }
        };

        const renderImgs = () => {
            if(images.length === 0 && this.props.searchInitialized){
                return (
                    <li className="not-found">
                        <h3>No Results Found</h3>
                        <p>You search did not return any results. Please try again.</p>
                    </li>
                )
            } else {
                return images;
            }
        };
        return (
            <div className="photo-container">
                <h2>{ renderHeader() }</h2>
                <ul>{ renderImgs() }</ul>
            </div>
        )
    }
}
export default ImageList;