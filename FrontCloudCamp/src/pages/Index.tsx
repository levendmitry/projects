import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';
import { StepOnePage } from './StepsPage/StepOnePage';
import { StepTwoPage } from './StepsPage/StepTwoPage';
import { StepThreePage } from './StepsPage/StepThreePage';

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/StepOnePage" element={<StepOnePage />}></Route>
        <Route path="/StepTwoPage" element={<StepTwoPage />}></Route>
        <Route path="/StepThreePage" element={<StepThreePage />}></Route>
      </Routes>
    </>
  );
};
