import React from 'react'
import { CalculateSeasonDates } from '../../Utils/CalculateSeasonDates'
import SummerAnimation from '../SummerAnimation/SummerAnimation'
import SpringAnimation from '../SpringAnimation/SpringAnimation'
import AutumnAnimation from '../AutumnAnimation/AutumnAnimation'
import WinterAnimation from '../WinterAnimation/WinterAnimation'
import './seasonal-animation.css'

const SeasonalAnimation = ({ currentDate }) => {

    const seasonDates = CalculateSeasonDates(currentDate.getFullYear())
    let animationComponent = null

    if (
        currentDate >= seasonDates.spring.start &&
        currentDate <= seasonDates.spring.end
      ) {
        animationComponent = <SpringAnimation />;
      } else if (
        currentDate >= seasonDates.summer.start &&
        currentDate <= seasonDates.summer.end
      ) {
        animationComponent = <SummerAnimation />;
      } else if (
        currentDate >= seasonDates.autumn.start &&
        currentDate <= seasonDates.autumn.end
      ) {
        animationComponent = <AutumnAnimation />;
      } else if (
        currentDate >= seasonDates.winter.start &&
        currentDate <= seasonDates.winter.end
      ) {
        animationComponent = <WinterAnimation />;
    }

  return (
    <div className='seasonal-animation'>{animationComponent}</div>
  )
}

export default SeasonalAnimation