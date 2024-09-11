import { Box } from '@mui/material';
import { ContainerLeftBox, LinePrice, TextIcon } from './PriceStyle';

const DataTextIcon = [
  { id: 1, icon: 'accessibility', text: 'Встреча/посадка в аэропорту' },
  { id: 2, icon: 'book', text: 'Детальное обучение к Умре' },
  { id: 3, icon: 'locate', text: 'Экскурсии по священным местам' },
  { id: 4, icon: 'thumbs-up', text: 'Помощь в совершении священных обрядов' },
  { id: 5, icon: 'volume-high', text: 'Ежедневные проповеди для паломников' },
  { id: 6, icon: 'shield', text: 'Контроль безопасности паломника' },
  { id: 7, icon: 'document', text: 'Покупка местной SIM-карты' },
  { id: 8, icon: 'cash', text: 'Помощь в обмене валюты' },
  { id: 9, icon: 'gift', text: 'Помощь в выборе подарков родным' },
  { id: 10, icon: 'heart-circle', text: 'Любая посильная помощь паломнику' },
];

const LeftPrice = () => {
  return (
    <>
      <ContainerLeftBox>
        <h2>Полное сопровождение:</h2>

        {DataTextIcon.map((item) => (
          <>
            <TextIcon key={item.id}>
              <Box>
                <ion-icon name={item.icon}></ion-icon>
              </Box>
              <p>{item.text}</p>
            </TextIcon>
            <LinePrice />
          </>
        ))}
      </ContainerLeftBox>
    </>
  );
};

export default LeftPrice;
