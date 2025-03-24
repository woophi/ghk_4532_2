import React from 'react';

import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { Button } from '@alfalab/core-components/button';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';
import { ChevronDownSIcon } from '@alfalab/icons-glyph/ChevronDownSIcon';

import anotherLogo from '../assets/another_logo.svg';
import bksLogo from '../assets/bks_logo.png';
import finLogo from '../assets/fin_logo.png';
import intBLogo from '../assets/int_b_logo.png';
import sberLogo from '../assets/sber_logo.png';
import tLogo from '../assets/t_logo.png';
import vtbLogo from '../assets/vtb_logo.png';
import { TransferActivesSteps } from '../transfer-actives/transfer-actives-steps';

import { SelectedOptionsRender } from './selected-brokers';

import { LS, LSKeys } from '../ls';
import { appSt } from '../style.css';
import styles from './index.module.css';

const stepsData = ['Выберите брокера', 'Отправьте заявку на перевод', 'Ожидайте зачисления активов в Альфа-Инвестиции'];

const options = [
  {
    key: '1',
    title: 'Т-инвестиции',
    logo: tLogo,
  },
  {
    key: '2',
    title: 'СберИнвестиции',
    logo: sberLogo,
  },
  {
    key: '3',
    title: 'ВТБ Инвестиции',
    logo: vtbLogo,
  },
  {
    key: '4',
    title: 'БКС',
    logo: bksLogo,
  },
  {
    key: '5',
    title: 'Финам',
    logo: finLogo,
  },
  {
    key: '6',
    title: 'Interactive Brokers',
    logo: intBLogo,
  },
  {
    key: '7',
    title: 'Другой брокер',
    logo: anotherLogo,
  },
];

export const TransferActivesBrokerLayout = ({ goToLoadingScreen }: { goToLoadingScreen: () => void }) => {
  const [openSelectBroker, setOpenSelectBroker] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = () => {
    if (selectedOptions.length === 0) {
      setError(true);

      return;
    }

    setError(false);
    setLoading(true);
    goToLoadingScreen();

    // trackInAnalytics('TRANSFER_ACTIVES_SEND_OFFER', {
    //   experimentNumber: 'GHK-4532',
    //   experimentVariant: `var${LS.getItem(USER_VARIANT_TA, '1')}`,
    //   selectedBrokers: options.filter(option => selectedOptions.includes(option.key)).map(option => option.title),
    // });

    LS.setItem(LSKeys.ShowThx, true);
  };

  const openSelectBrokerModal = () => {
    if (loading) {
      return;
    }
    setOpenSelectBroker(true);
  };
  const closeSelectBrokerModal = () => {
    if (selectedOptions.length > 0) {
      setError(false);
    }
    setOpenSelectBroker(false);
  };

  const toggleOption = (option: (typeof options)[0]) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedOptions(prevOptions =>
      prevOptions.includes(option.key) ? prevOptions.filter(ops => ops !== option.key) : prevOptions.concat(option.key),
    );
  };

  return (
    <div className={appSt.container}>
      <div>
        <Typography.TitleMobile tag="h1" view="medium" color="primary" weight="medium">
          Перевод активов от другого брокера
        </Typography.TitleMobile>
        <Gap size={16} />
        <div>
          <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
            Срок — <span className={styles.attentionItem}>3-5 дней</span>
          </Typography.Text>
          <Typography.Text view="primary-medium">
            Стоимость — <span className={styles.attentionItem}>бесплатно</span>
          </Typography.Text>
        </div>
      </div>

      <TransferActivesSteps title="Как это работает" stepsData={stepsData} />
      <Gap size={256} />

      <div className={styles.bottomBtns}>
        <PureCell
          className={`${styles.selectCell} ` + (error ? styles.selectCellError : '')}
          onClick={openSelectBrokerModal}
        >
          <PureCell.Content>
            <PureCell.Main>
              <SelectedOptionsRender options={options} selectedOptions={selectedOptions} error={error} />
            </PureCell.Main>
          </PureCell.Content>
          <PureCell.Addon verticalAlign="center">
            <ChevronDownSIcon color="#898991" />
          </PureCell.Addon>
        </PureCell>
        <Button block={true} loading={loading} view="primary" onClick={handleSubmit}>
          Отправить заявку
        </Button>
      </div>

      <BottomSheet open={openSelectBroker} onClose={closeSelectBrokerModal} hasCloser={true} title="Выберите брокера">
        <div>
          {options.map(option => (
            <PureCell key={option.key} verticalPadding="default" onClick={toggleOption(option)}>
              <PureCell.Graphics verticalAlign="center">
                <img src={option.logo} width={48} height={48} alt={option.title} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text color="primary" view="primary-medium">
                    {option.title}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Addon verticalAlign="center">
                <Checkbox size={24} checked={selectedOptions.includes(option.key)} />
              </PureCell.Addon>
            </PureCell>
          ))}
          <Gap size={24} />
          <Button block={true} view="primary" onClick={closeSelectBrokerModal}>
            Выбрать
          </Button>
        </div>
      </BottomSheet>
    </div>
  );
};
