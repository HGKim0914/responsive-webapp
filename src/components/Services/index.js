import React from 'react';
import icon1 from "../../img/svg-4.svg";
import icon2 from "../../img/svg-5.svg";
import icon3 from "../../img/svg-6.svg";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">

                <ServicesH1>Our Services</ServicesH1>

                <ServicesWrapper>

                    <ServicesCard>
                        <ServicesIcon src={icon1} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>Our membership reduces your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our platform online anywhere, anytime in the world.</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={icon3} />
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock our special membership card and check the numerous benefits.</ServicesP>
                    </ServicesCard>

                </ServicesWrapper>

            </ServicesContainer>
        </>
    )
}

export default Services
