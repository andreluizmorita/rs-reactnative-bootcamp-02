import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const OrganizationItem = ({ organization }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{organization.full_name}</Text>

    <View style={styles.infoContainer}>
      <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
      <Text style={styles.title}>{organization.login}</Text>
    </View>
  </View>
);

OrganizationItem.propTypes = {
  organization: PropTypes.shape({
    avatar: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganizationItem;
