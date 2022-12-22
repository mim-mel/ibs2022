import styled from '@emotion/styled/macro';
import { useEffect, useRef } from 'react';


const MapSection = () => {
    const mapElement = useRef(null);

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;
    
        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(37.4860202, 127.0209727);
        const mapOptions = {
          center: location,
          zoom: 17,
 
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
          position: location,
          map,
        });
      }, []);

      const mapElement2 = useRef(null);

    useEffect(() => {
        const { naver } = window;
        if (!mapElement2.current || !naver) return;
    
        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location2 = new naver.maps.LatLng(33.48958693876022, 126.52207797351276);
        const mapOptions = {
          center: location2,
          zoom: 17,
  
        };
        const map = new naver.maps.Map(mapElement2.current, mapOptions);
        new naver.maps.Marker({
          position: location2,
          map,
        });
      }, []);


    return(
        <MapWrap>
            <MapImgTextBlock>
                <MapImgBlock>
                    <MapImgShadow/>
                    <MapImg ref={mapElement}/>
                </MapImgBlock>
                <MapTextBlock>
                    <MapTitle>서초 본사</MapTitle>
                    <RoundText margin>주소</RoundText>
                    <MapText>서울특별시 서초구 효령로 336 윤일빌딩 5층</MapText>
                    <RoundText>오시는 길</RoundText>
                    <MapText>남부터미널 3번 출구 도보 10분</MapText>
                </MapTextBlock>
            </MapImgTextBlock>

            <MapImgTextBlock>
                <MapImgBlock>
                    <MapImgShadow/>
                    <MapImg ref={mapElement2}/>
                </MapImgBlock>
                <MapTextBlock>
                    <MapTitle>제주 지사</MapTitle>
                    <RoundText margin>주소</RoundText>
                    <MapText>제주특별자치도 제주시 청사로 28, 3층</MapText>
                    <RoundText>오시는 길</RoundText>
                    <MapText>제주국제공항에서 승용차로 13분</MapText>
                    <MapText leftmore>472번 버스 지방합동청사 정거장 도보 3분</MapText>
                </MapTextBlock>
            </MapImgTextBlock>
        </MapWrap>
    )
}

const MapWrap = styled.div`
    width: 1000px;
    height: 700px;
    margin: 200px auto;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
        width: 80%;    
        margin: 150px auto 100px auto;
    }

    @media screen and (max-width: 760px) {
        height: auto;
        margin: 130px auto 60px auto;
    }
`

const MapImgTextBlock = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 45% 37%;
    margin-bottom: 70px;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 40% 51%;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: 100%;
        justify-content: center;
    }
`

const MapImgBlock = styled.div`
    background-color: white;
    border-radius: 40px;
    position: relative;

    @media screen and (max-width: 1024px) {
        width: 270px;
        height: 270px;
    }

    @media screen and (max-width: 760px) {
        width: 100%;
        height: 210px;
        border-radius: 30px;
    }
`

const MapImgShadow = styled.div`
    width: 100%;
    height: 100%;
    background-color: #053dc0;
    position: absolute;
    top: 15px;
    left: 15px;
    border-radius: 50px;
    z-index: -1;

    @media screen and (max-width: 760px) {
        border-radius: 40px;
    }
`

const MapImg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 40px;
    border: none;

`

const MapTextBlock = styled.div`
    justify-content: center;
    align-items: flex-start;
    padding: 60px 0;
    box-sizing: border-box;

    @media screen and (max-width: 760px) {
        padding: 30px 15px;
    }
`

const MapTitle = styled.div`
    font-size: 25px;
    font-weight: 600;
    color: #053dc0;
    margin-bottom: 45px;

    @media screen and (max-width: 1024px) {
        margin-bottom: 30px;
        margin-top: 20px;
    }

    @media screen and (max-width: 760px) {
        margin-bottom: 20px;
        font-size: 23px;
    }
`

const RoundText = styled.div`
    font-size: 15px;
    padding: 5px 15px;
    border-radius: 30px;
    border: 2px solid #053dc0;
    color: #053dc0;
    font-weight: 600;
    display: inline-flex;
    margin-bottom: ${props=> props.margin ? '30px' : '0'};

    @media screen and (max-width: 1024px) {
        font-size: 14px;
    }

    @media screen and (max-width: 760px) {
        margin-bottom: ${props=> props.margin ? '10px' : '0'};
        font-size: 13px;
        padding: 4px 10px;
    }
`

const MapText = styled.div`
    font-size: 15px;
    color: #686868;
    display: inline-flex;
    margin-left: ${(props)=>props.leftmore ? '104px' : '13px'};

    @media screen and (max-width: 1024px) {
        font-size: 14px;
            margin-left: ${(props)=>props.leftmore ? '100px' : '13px'};
    }

    @media screen and (max-width: 760px) {
        font-size: 12px;
        margin-left: ${(props)=>props.leftmore ? '86px' : '13px'};
        width: 70%;
    }
`

export default MapSection;