import { Spinner } from '@alfalab/core-components/spinner';
import { SystemMessage } from '@alfalab/core-components/system-message';
import { useTimeout } from '../hooks/useTimeout';
import { loadingPageLayout } from './style.css';

type Props = {
  title: string;
  redirectAction: () => void;
  redirectTimeoutMs?: number;
};

export const LoadingScreen = ({ title, redirectTimeoutMs, redirectAction }: Props) => {
  useTimeout(() => {
    redirectAction();
  }, redirectTimeoutMs ?? null);

  return (
    <div className={loadingPageLayout}>
      <SystemMessage>
        <SystemMessage.Graphic>
          <Spinner visible={true} preset={48} />
        </SystemMessage.Graphic>
        <SystemMessage.Title>{title}</SystemMessage.Title>
      </SystemMessage>
    </div>
  );
};
