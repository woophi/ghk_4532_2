import { Gap } from '@alfalab/core-components/gap';
import { Steps } from '@alfalab/core-components/steps';
import { Typography } from '@alfalab/core-components/typography';
import { stepStyle } from './style.css';

type Props = {
  title: string;
  stepsData: string[];
};

export const TransferActivesSteps = ({ stepsData, title }: Props) => (
  <div>
    <Typography.TitleMobile tag="h2" view="small" color="primary" weight="medium">
      {title}
    </Typography.TitleMobile>
    <Gap size={12} />
    <Steps isVerticalAlign={true} interactive={false} className={stepStyle}>
      {stepsData.map(step => (
        <Typography.Text key={step} view="primary-medium">
          {step}
        </Typography.Text>
      ))}
    </Steps>
  </div>
);
