import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';

import docs from '../../assets/docs.png';
import house from '../../assets/house.png';
import money from '../../assets/money.png';

type Props = {
  title: string;
};

export const TransferActivesPackage = ({ title }: Props) => (
  <div>
    <Typography.TitleMobile tag="h2" view="small" color="primary" weight="medium">
      {title}
    </Typography.TitleMobile>
    <Gap size={16} />

    <PureCell verticalPadding="airy">
      <PureCell.Graphics verticalAlign="center">
        <img src={money} width={48} height={48} alt="money" />
      </PureCell.Graphics>
      <PureCell.Content>
        <PureCell.Main>
          <Typography.Text view="primary-medium" tag="p" defaultMargins={false} weight="bold">
            От 8 до 14% на остаток денежных средств по брокерскому счёту
          </Typography.Text>
          <Typography.Text view="primary-small" color="secondary">
            Чем больше у вас активов в деньгах, тем больше процент
          </Typography.Text>
        </PureCell.Main>
      </PureCell.Content>
    </PureCell>
    <PureCell verticalPadding="airy">
      <PureCell.Graphics verticalAlign="center">
        <img src={house} width={48} height={48} alt="house" />
      </PureCell.Graphics>
      <PureCell.Content>
        <PureCell.Main>
          <Typography.Text view="primary-medium" tag="p" defaultMargins={false} weight="bold">
            Отмену комиссии на первые три сделки в каждом месяце
          </Typography.Text>
        </PureCell.Main>
      </PureCell.Content>
    </PureCell>
    <PureCell verticalPadding="airy">
      <PureCell.Graphics verticalAlign="center">
        <img src={docs} width={48} height={48} alt="docs" />
      </PureCell.Graphics>
      <PureCell.Content>
        <PureCell.Main>
          <Typography.Text view="primary-medium" tag="p" defaultMargins={false} weight="bold">
            Скидку на маржинальную торговлю
          </Typography.Text>
        </PureCell.Main>
      </PureCell.Content>
    </PureCell>
  </div>
);
