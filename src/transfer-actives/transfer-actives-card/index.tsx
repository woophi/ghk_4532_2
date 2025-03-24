import React from 'react';

import { Divider } from '@alfalab/core-components/divider';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';

import { cardStyle, priceStyle } from './style.css';

type Props = {
  title: string;
  items: Array<{
    title: string;
    price: string;
    subtitle: string;
  }>;
};

export const TransferActivesCard = ({ title, items }: Props) => (
  <div>
    <Typography.TitleMobile tag="h2" view="small" color="primary" weight="medium">
      {title}
    </Typography.TitleMobile>
    <Gap size={16} />

    <div className={cardStyle}>
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-large" weight="bold">
              {item.title}
            </Typography.Text>
            <Typography.Text view="primary-medium" color="secondary">
              {item.subtitle} <span className={priceStyle}>{item.price}</span>
            </Typography.Text>
          </div>
          {index !== items.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  </div>
);
