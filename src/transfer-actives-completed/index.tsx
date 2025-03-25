import { PlaceholderScreen } from '../placeholder-screen';

export const TransferActivesCompleted = () => {
  return (
    <PlaceholderScreen
      btnText="К инвестициям"
      title="Не получилось загрузить"
      subtitle="Сейчас перевод активов недоступен. Попробуйте зайти позже"
      onClick={() => {
        window.location.replace('https://alfa.me/investments');
      }}
    />
  );
};
