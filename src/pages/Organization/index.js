import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

const Organization = () => (
  <View>
    <Header title="Organization" />
  </View>
);

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.prototype = {
  tintColor: PropTypes.string.isRequired,
};

Organization.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Organization;
