import { Typography } from '@alfalab/core-components/typography';

import styles from './index.module.css';

type Props = {
  selectedOptions: string[];
  options: Array<{
    key: string;
    title: string;
    logo: string;
  }>;
  error: boolean;
};

export const SelectedOptionsRender = ({ selectedOptions, options, error }: Props) => {
  if (selectedOptions.length === 1) {
    const selectedOption = options.find(option => selectedOptions.includes(option.key));

    return (
      <div className={styles.stack}>
        <img src={selectedOption?.logo} width={24} height={24} alt={selectedOption?.title} />
        <Typography.Text view="primary-medium" color="primary">
          {selectedOption?.title}
        </Typography.Text>
      </div>
    );
  }

  if (selectedOptions.length > 1) {
    const firstTwoOptions = options.filter(option => [selectedOptions[0], selectedOptions[1]].includes(option.key));

    return (
      <div className={styles.stack}>
        <div className={styles.stackImgs}>
          {firstTwoOptions.map((option, index) => (
            <img
              key={option.key}
              src={option.logo}
              width={24}
              height={24}
              alt={option.title}
              className={index === 0 ? styles.firstImg : styles.secondImg}
            />
          ))}
          {selectedOptions.length > 2 && (
            <div className={styles.numbersBox}>
              <Typography.Text view="caps" color="primary-inverted">
                +{selectedOptions.length - 2}
              </Typography.Text>
            </div>
          )}
        </div>
        <Typography.Text
          view="primary-medium"
          style={selectedOptions.length === 2 ? { marginLeft: 4 } : undefined}
          color="primary"
        >
          Выбрано {selectedOptions.length}
        </Typography.Text>
      </div>
    );
  }

  return (
    <Typography.Text view="primary-medium" color={error ? 'accent' : 'primary'} dataTestId="select-broker">
      Выберите брокера
    </Typography.Text>
  );
};
