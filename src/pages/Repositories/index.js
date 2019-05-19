import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

const Repositories = () => (
  <View>
    <Header title="Repositories" />
  </View>
);

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.prototype = {
  tintColor: PropTypes.string.isRequired,
};

Repositories.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Repositories;
