import React from 'react';
import { LockBody, ReleaseBody, Spinner } from './styles';

interface LoadingProps {}

interface ILoadingComposition {
  ReleaseBody: React.FC;
}

const Loading: React.FC<LoadingProps> & ILoadingComposition = (props) => {
  return (
    <Spinner>
      <LockBody />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

export default Loading;
