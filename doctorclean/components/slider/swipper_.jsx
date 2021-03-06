import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import { isUndeclared } from 'src/format';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swipper = ({children, auto, ...swipperProps}) => {

  if( auto )
    return (
      <AutoPlaySwipeableViews {...swipperProps}>
        {children}
      </AutoPlaySwipeableViews>
    )
  else
    return (
      <SwipeableViews {...swipperProps}>
        {children}
      </SwipeableViews>
    )
  
}
export default Swipper;