import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import TuneSDK from 'react-native-tune-sdk';

import styles from './styles';

const ClearCustomProfileVariable = () => {
  const onPress = () => {
    const config = {
      name: 'CUSTOM_NUMBER',
    };

    try {
      TuneSDK.clearCustomProfileVariable(config);
      alert('Success calling clearCustomProfileVariable');
    } catch (e) {
      alert(`ERROR! calling clearCustomProfileVariable \n${e.message}`);
    }
  };

  return (
    <View style={styles.eventSection}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPress}
          title="Test"
          color="#007AFF"
          accessibilityLabel=""
        />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={[styles.text, styles.title]}>{"Clear Custom Profile Variable"}</Text>
        </View>
        <View>
          <Text style={[styles.text]}>
            {"{}"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ClearCustomProfileVariable;
