import React from 'react';
import Description from './Description';
import Image from './Image';
import Title from './Title';
import image from './image1.png';

class SimpleCard extends React.Component {
    render() {
        return (
            <>
            <Image source={image} />
            <Title title="Sherlock Holmes" />
            <Description description="Sherlock Holmes has to be one of the most famous fictional detectives. First introduced in 1887 in a A Study in Scarlet, Holmes popularity persists over a century after. A testament to the work of Doyle, Holmes is the most portrayed detective in movies and television." />
            </>
        )
    }
}

export default SimpleCard        