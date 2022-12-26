import styled from '@emotion/styled/macro';

const AdviserSection = () => {
    return(
        <AdiviserWrapMain>
<AdiviserWrap>
            <HorizonLine/>
            <VerticalLine left='33.33%'/>
            <VerticalLine left='66.66%'/>
            <LogoWrap>
                <LogoBlock href='http://www.sechanglaw.com/kr/main/'>
                    <Logo src='/image/logo1.jpg' height='38px'/>
                </LogoBlock>
                <LogoBlock href='https://www.haeanip.com/'>
                    <Logo src='/image/logo3.jpg' height='36px'/>
                </LogoBlock>
                <LogoBlock href='https://map.naver.com/v5/search/%EC%84%B8%EB%AC%B4%EB%B2%95%EC%9D%B8%20%EC%9C%A4%EC%8A%B9/place/1926409272?placePath=%3Fentry%253Dpll&c=14138011.4359828,4508315.0947035,15,0,0,0,dh'>
                    <Logo src='/image/logo2.jpg' height='38px'/>
                </LogoBlock>
            </LogoWrap>
            <LogoWrap>
                <LogoBlock href='https://mgbusan.modoo.at/'>
                    <Logo src='/image/logo4.jpg' height='44px'/>
                </LogoBlock>
                <LogoBlock href='http://www.logoslabor.com/'>
                    <Logo src='/image/logo5.jpg' height='38px'/>
                </LogoBlock>
                <LogoBlock href='http://www.youonetax.com/'>
                <Logo src='/image/logo6.jpg' height='38px'/>
                </LogoBlock>
            </LogoWrap>
        </AdiviserWrap>
        </AdiviserWrapMain>
    )
}

const AdiviserWrapMain = styled.div`

    @media screen and (max-width: 760px) {
        margin-bottom: 400px;
    }
`

const AdiviserWrap = styled.div`
    width: 1100px;
    height: 300px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 150px;

    @media screen and (max-width: 1024px) {
        width: 80%;
        margin-bottom: 150px;
    }
`

const HorizonLine = styled.div`
    width: 100%;
    height: 0.1px;
    background-color: rgba(0,0,0,0.09);
    position: absolute;
    top: 50%;

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin-bottom: 200px;
    }

    @media screen and (max-width: 760px) {
        display: none;
    }
`

const VerticalLine = styled.div`
    height: 100%;
    width: 0.1px;
    background-color: rgba(0,0,0,0.09);
    position: absolute;
    left: ${props=>props.left};

    @media screen and (max-width: 760px) {
        display: none;
    }
`

const LogoWrap = styled.div`
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-columns: 33.3333% 33.3333% 33.3333%;

    @media screen and (max-width: 760px) {
        grid-template-columns: 100%;
        height: 100%;
    }
`

const LogoBlock = styled.a`
    margin: auto;
`

const Logo = styled.img`
    height: ${props=>props.height};
    opacity: 0.6;
    transition: 0.3s;

    &:hover {
        opacity: 1;
    }

    @media screen and (max-width: 1024px) {
        transform: scale(0.8);
    }
    
    @media screen and (max-width: 760px) {
    }
`




export default AdviserSection;