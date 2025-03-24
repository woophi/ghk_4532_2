import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';

import transferActivesBanner from '../../assets/transfer_actives.png';

type Props = {
  title: string;
  subtitle: string;
};

export const TransferActivesHead = ({ subtitle, title }: Props) => (
  <div>
    <img
      src={transferActivesBanner}
      alt="transferActivesBanner"
      width={263}
      height={200}
      style={{
        display: 'flex',
        margin: '0 auto',
      }}
    />
    <Gap size={20} />
    <Typography.TitleMobile tag="h1" view="medium" color="primary" weight="medium">
      {title}
    </Typography.TitleMobile>
    <Gap size={12} />

    <Typography.Text view="primary-medium">{subtitle}</Typography.Text>
  </div>
);
