import React, {useEffect, useState} from 'react';
import ImageSlider from './ImageSlider';
import Footer from './Footer';

function Body() {
    const slides = [
        {url: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D', title: 'img1' },
        {url: 'https://thumbs.dreamstime.com/b/young-cat-hunting-butterfly-meadow-backlit-42064308.jpg', title: 'img2'},
    ];

    // const containerStyles = {
    //     width: '700px',
    //     height: '450px',
    //     margin: '0 auto',
    //     marginBottom: '30px',
    // }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyles = {
        width: windowWidth <= 768 ? '450px' : '700px',
        height: windowWidth <= 768 ? '300px' : '450px',
        margin: '0 auto',
        marginBottom: '30px',
        padding: windowWidth <= 768 ? '0 10px' : '0'
    };
  return (
    <div className="body">
            <h1 className='text-white text-3xl font-bold text-center mb-2 mt-3'>Welcome to Myndsight</h1>
            <p className='text-white text-xl text-center m-2'>Discover a groundbreaking mental health experience with our augmented reality app.</p>
            <p className='text-xl text-white text-center m-2'>Your personal virtual therapist offers real-time support and guidance,</p>
            <p className='text-xl text-white text-center m-2'>making mental wellness accessible and engaging.</p>
            <p className='text-xl text-white text-center m-2'>Benefit from AR-guided meditation sessions to find your inner peace and experience AR simulations of social situations to help you overcome anxiety.</p>
            <p className='text-xl text-white text-center m-2'>Whether you're battling social anxiety, depression, or simply need a friendly companion, this innovative solution is here to help.</p>
            <p className='text-xl text-white text-center m-2'>Step into a new world of mental well-being and embrace a healthier, happier you with cutting-edge AR technology.</p>
        <div style={containerStyles}>
            <ImageSlider slides={slides} />
        </div>
        <Footer />
    </div>
  );
}

export default Body;






