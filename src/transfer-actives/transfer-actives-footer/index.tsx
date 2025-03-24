import React from 'react';

import { Button } from '@alfalab/core-components/button';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';

import { appSt } from '../../style.css';

type Props = {
  title: string;
  subtitle: string;
  btnText: string;
  onClick: () => void;
};

export const TransferActivesFooter = ({ btnText, onClick, subtitle, title }: Props) => (
  <React.Fragment>
    <div>
      <Typography.TitleMobile tag="h2" view="small" color="primary" weight="medium">
        {title}
      </Typography.TitleMobile>
      <Gap size={16} />
      <Typography.Text view="primary-medium">{subtitle}</Typography.Text>
      <Gap size={96} />
    </div>

    <div className={appSt.bottomBtn}>
      <Button block={true} view="primary" onClick={onClick}>
        {btnText}
      </Button>
    </div>
  </React.Fragment>
);
