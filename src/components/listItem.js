import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Styles} from '../../assets/utils/styles';

export const ListItem = ({item}) => {
  return (
    <View style={Styles.listItemContainer}>
      {/* Image */}
      <View>
        <Image
          style={Styles.listItemDP}
          source={{
            uri: item.avatar,
          }}
        />
      </View>
      {/* DATA */}
      <View style={Styles.listItem}>
        <Text>{item.id}</Text>
        <Text style={Styles.listItemTitle}>
          {item.first_name} {item.last_name}
        </Text>
        <Text>{item.email}</Text>
      </View>
    </View>
  );
};
