import { FC } from 'react';
import { Link } from 'react-router-dom';

export const MainPage: FC = () => {
  return (
    <>
      <div>MainPage1</div>
      <hr />

      <Link to="/StepOnePage">StartBut</Link>
    </>
  );
};
