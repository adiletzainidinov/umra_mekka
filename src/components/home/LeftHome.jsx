import { useSelector } from 'react-redux';
import Button from '../../shared/UI/button/Button';
import { LeftContainer, StyledButtonInformation } from './homeStyle';

const LeftHome = () => {
  const {languageStore} = useSelector((state) => state.umra);

  return (
    <>
      <LeftContainer>
        <h3>{languageStore ? 'Умра – ыйык сапар' : 'священный умра'}</h3>
        <h1>Руханий тазалануу:</h1>
        <h2>арзан баада жана сапаттуу тажрыйба</h2>
        <div className="line"></div>
        <p>
          Умра сапары жөнүндө маалымат: бизден сиз сапарды жакшы өткөрүү үчүн
          керектүү бардык маалыматты аласыз. Баалар, кызматтар жана башка керек
          болгон нерселер боюнча маалыматтар оңой эле табылат
        </p>
        <div className="buttonPapa">
          <Button>Сапарды баштоо</Button>
          <StyledButtonInformation>Толук маалымат алуу</StyledButtonInformation>
        </div>
      </LeftContainer>
    </>
  );
};

export default LeftHome;
