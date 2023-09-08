import { FC } from 'react';
import { Stepper } from '../../components/Stepper';
import { Link } from 'react-router-dom';

export const StepOnePage: FC = () => {
  return (
    <>
      <Stepper />
      <hr />
      <div>THIS IS STEP 1 FORM</div>
      <hr />
      <div>
        <Link to="/">BackBut</Link>
      </div>
      <div>NextBut</div>
    </>
  );
};
