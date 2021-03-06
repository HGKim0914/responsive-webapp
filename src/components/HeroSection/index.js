import React, {useState} from 'react';
import Video from '../../videos/arcade.mp4';
import {Button} from '../ButtonElements';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from "./HeroElements";

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">

            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>

            <HeroContent>

                <HeroH1>Make Delivery Fast and Easy</HeroH1>
                <HeroP>Sign up for rocket delivery membership and receive $150 of credit for your future delivery.</HeroP>

                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary={1}
                        dark={1}
                        smooth={true} duration={500} spy={true} offset={-80}
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>

            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
