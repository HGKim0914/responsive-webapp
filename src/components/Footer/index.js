import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    FooterContainer,
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinkWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLinks,
} 
    from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>

            <FooterWrap>
                <FooterLinksContainer>

                    <FooterLinkWrapper>
                        <FooterLinkItems>

                            <FooterLinkTitle>About us</FooterLinkTitle>

                            <FooterLink to="signin">How it works</FooterLink>
                            <FooterLink to="signin">Testimonials</FooterLink>
                            <FooterLink to="signin">Careers</FooterLink>
                            <FooterLink to="signin">Investors</FooterLink>
                            <FooterLink to="signin">Terms of Service</FooterLink>
                            
                        </FooterLinkItems>

                        <FooterLinkItems>

                            <FooterLinkTitle>Contact us</FooterLinkTitle>

                            <FooterLink to="signin">Contact</FooterLink>
                            <FooterLink to="signin">Support</FooterLink>
                            <FooterLink to="signin">Destinations</FooterLink>
                            <FooterLink to="signin">Sponsorships</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinkWrapper>

                    <FooterLinkWrapper>

                        <FooterLinkItems>

                            <FooterLinkTitle>Videos</FooterLinkTitle>

                            <FooterLink to="signin">Submit Video</FooterLink>
                            <FooterLink to="signin">Ambassadors</FooterLink>
                            <FooterLink to="signin">Agency</FooterLink>
                            <FooterLink to="signin">Influencer</FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>

                            <FooterLinkTitle>Social Media</FooterLinkTitle>

                            <FooterLink to="signin">Instagram</FooterLink>
                            <FooterLink to="signin">Facebook</FooterLink>
                            <FooterLink to="signin">Youtube</FooterLink>
                            <FooterLink to="signin">Twitter</FooterLink>
                            
                        </FooterLinkItems>

                        
                    </FooterLinkWrapper>

                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>

                        <SocialLogo to='/' onClick={toggleHome}>PackThru</SocialLogo>
                        <WebsiteRights>PackThru © {new Date().getFullYear()} all rights reserved.</WebsiteRights>

                        <SocialIcons>

                            <SocialIconLinks href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLinks>
                            <SocialIconLinks href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLinks>

                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer
