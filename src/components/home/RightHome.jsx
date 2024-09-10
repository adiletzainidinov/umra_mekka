import { FloatingDecor, FloatingDecor2, FloatingDecor3, FloatingDecor4, Img3D, Img3DContainer, Img3DWrapper, RightContainer } from './homeStyle';
import mekkeImg from '../../assets/images/mekke.jpg';
import mekkeImgGorod from '../../assets/images/1.jpg';


const RightHome = () => {
  return (
    <RightContainer>
      <Img3DContainer>
        <Img3DWrapper>
          <Img3D src={mekkeImg} alt="mekkeImg" /> 
          <FloatingDecor /> 
          <FloatingDecor2 /> 
        </Img3DWrapper>

        <Img3DWrapper>
          <Img3D style={{marginTop: 130}} src={mekkeImgGorod} alt="mekkeImgGorod" /> 
          <FloatingDecor3 /> 
          <FloatingDecor4 /> 
        </Img3DWrapper>
      </Img3DContainer>
    </RightContainer>
  );
};

export default RightHome;
