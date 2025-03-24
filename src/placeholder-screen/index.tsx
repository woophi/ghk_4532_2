import { Button } from '@alfalab/core-components/button';
import { SystemMessage } from '@alfalab/core-components/system-message';

import sparkles from '../assets/sparkles.png';

import { loadingPageLayout } from '../loading-screen/style.css';
import { appSt } from '../style.css';

type Props = {
  title: string;
  subtitle: string;
  btnText: string;
  onClick: () => void;
};

export const PlaceholderScreen = ({ title, subtitle, btnText, onClick }: Props) => (
  <div className={loadingPageLayout}>
    <SystemMessage>
      <SystemMessage.Graphic>
        <img src={sparkles} width={80} height={80} alt="sparkles" />
      </SystemMessage.Graphic>
      <SystemMessage.Title>{title}</SystemMessage.Title>
      <SystemMessage.Subtitle>{subtitle}</SystemMessage.Subtitle>
    </SystemMessage>

    <div className={appSt.bottomBtn}>
      <Button block={true} view="secondary" onClick={onClick}>
        {btnText}
      </Button>
    </div>
  </div>
);
