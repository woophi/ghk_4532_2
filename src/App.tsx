import { useEffect, useState } from 'react';
import { LoadingScreen } from './loading-screen';
import { LS, LSKeys } from './ls';
import { PlaceholderScreen } from './placeholder-screen';
import { appSt } from './style.css';
import { TransferActivesBrokerLayout } from './transfer-actives-broker';
import { TransferActivesCompleted } from './transfer-actives-completed';
import { TransferActivesCard } from './transfer-actives/transfer-actives-card';
import { TransferActivesFooter } from './transfer-actives/transfer-actives-footer';
import { TransferActivesHead } from './transfer-actives/transfer-actives-head';
import { TransferActivesSteps } from './transfer-actives/transfer-actives-steps';

const stepsData = [
  'Переведите к нам активы на сумму от 5000 ₽',
  'Продержите положительный баланс 2 месяца',
  'Получите акции в подарок',
];

const cardItems = [
  {
    title: '5 акций',
    subtitle: 'за перевод активов от',
    price: '5000 ₽',
  },
  {
    title: '10 акций',
    subtitle: 'за перевод активов от',
    price: '10 000 ₽',
  },
  {
    title: '20 акций',
    subtitle: 'за перевод активов от',
    price: '50 000 ₽',
  },
];

export const App = () => {
  const [step, setStep] = useState<'init' | 'select' | 'loading' | 'placeholder'>('init');

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const handleClick = () => {
    // trackInAnalytics('TRANSFER_ACTIVES_FIRST_PAGE_CLICK', {
    //     experimentNumber: 'GHK-4532',
    //     experimentVariant: 'var1',
    // });

    setStep('select');
  };

  if (LS.getItem(LSKeys.ShowThx, null) && step === 'init') {
    return <TransferActivesCompleted />;
  }

  switch (step) {
    case 'init':
      return (
        <>
          <div className={appSt.container}>
            <TransferActivesHead
              title="Акции за перевод"
              subtitle="Дарим до 20 акций крупнейших российских компаний каждому, кто переведёт активы в Альфа-Инвестиции"
            />

            <TransferActivesSteps stepsData={stepsData} title="Всё просто" />
            <TransferActivesCard title="Сколько акций вы можете получить" items={cardItems} />

            <TransferActivesFooter
              title="Как перевести активы"
              subtitle="По кнопке ниже. Хватит пары минуты, чтобы это сделать. А в офис приезжать не нужно 😉"
              btnText="Перевести"
              onClick={handleClick}
            />
          </div>
        </>
      );

    case 'select': {
      return <TransferActivesBrokerLayout goToLoadingScreen={() => setStep('loading')} />;
    }
    case 'loading': {
      return (
        <LoadingScreen
          title="Проверяем доступность перевода"
          redirectTimeoutMs={3500}
          redirectAction={() => setStep('placeholder')}
        />
      );
    }

    case 'placeholder': {
      return (
        <PlaceholderScreen
          btnText="Открыть брокерский счёт"
          title="Не получилось отправить заявку"
          subtitle="Нужно открыть брокерский счёт. Затем попробуйте снова, воспользовавшись формой для перевода активов"
          onClick={() => {
            window.location.replace('alfabank://investments/open_brokerage_account');
          }}
        />
      );
    }
    default:
      return null;
  }
};
