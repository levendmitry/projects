import { FC } from 'react';
import { Stepper } from '../../components/Stepper';
import { Link } from 'react-router-dom';

export const StepTwoPage: FC = () => {
  return (
    <>
      <Stepper />
      <hr />
      <div>THIS IS STEP 2 FORM</div>
      <hr />
      <div>
        <Link to="/">BackBut</Link>
      </div>
      <div>NextBut</div>
    </>
  );
};
