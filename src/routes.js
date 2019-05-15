import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';

const Routes = createAppContainer(createSwitchNavigator({
  Welcome,
  Repositories
}));

export default Routes;
