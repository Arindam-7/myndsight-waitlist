import { useState } from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
        marginTop: '30px',
        color: '#fff',
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const leftArrStyles = {
        position: 'absolute',
        top: '50%',
        left: '32px',
        transform: 'translate(0, -50%)',
        fontSize: '55px',
        color:'#fff',
        zIndex: '1',
        cursor: 'pointer',
    }

    const rightArrStyles = {
        position: 'absolute',
        top: '50%',
        right: '32px',
        transform: 'translate(0, -50%)',
        fontSize: '55px',
        color:'#fff',
        zIndex: '1',
        cursor: 'pointer',
    }

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    }

    const dotStyles = {
        margin: '0 5px',
        cursor: 'pointer',
        fontSize: '20px',
    }

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrStyles} onClick={goToPrev}> ← </div>
            <div style={rightArrStyles} onClick={goToNext}> → </div>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>●</div>
                    )
                )}
            </div>
        </div>
    )
};

export default ImageSlider;