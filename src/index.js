import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import '~/config/ReactotronConfig';

import createNavigator from '~/routes';

class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@GitHuber:username');

    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;
    const Routes = createNavigator(userLogged);

    if (!userChecked) return null;

    return <Routes />;
  }
}

export default App;
