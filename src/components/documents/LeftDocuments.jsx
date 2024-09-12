import {
  DocumentsSome,
  LeftContainer,
  PapaDocumentSome,
} from './DocumentsStyle';

const DocumentsData = [
  {
    id: 1,
    icon: 'earth-outline',
    title: 'Заграничный паспорт',
    subTitle:
      'Заграничный паспорт, ID карта Не менее 6 месяцев до окончания срока действия',
  },
  {
    id: 2,
    icon: 'document-attach-outline',
    title: 'Свидетельство о браке',
    subTitle: 'Супругам нужно иметь свидетельство о браке (подлинник)',
  },
  {
    id: 3,
    icon: 'person-circle',
    title: 'Фото',
    subTitle:
      '4 цветные фотографии 3*4 на белом фоне (женщина в черном платке на белом фоне)',
  },
  {
    id: 4,
    icon: 'people',
    title: 'Сопровождение',
    subTitle: 'Женщина должна сопровождаться махрамом старше 21 года.',
  },
];

const LeftDocuments = () => {
  return (
    <>
      <LeftContainer>
        <h1>Необходимые документы для подачи</h1>
        <PapaDocumentSome>
          {DocumentsData.map((item) => (
            <DocumentsSome key={item.id}>
              <div className="icons">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <h2>{item.title}</h2>
              <p>{item.subTitle}</p>
            </DocumentsSome>
          ))}
        </PapaDocumentSome>
      </LeftContainer>
    </>
  );
};

export default LeftDocuments;
