import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Stepper = () => {
  return (
    <div>
      <div>stepper</div>
      <span>
        <Link to="/StepOnePage">step1</Link>
      </span>
      <span>
        <Link to="/StepTwoPage">step2</Link>
      </span>
      <span>
        <Link to="/StepThreePage">step3</Link>
      </span>
    </div>
  );
};
