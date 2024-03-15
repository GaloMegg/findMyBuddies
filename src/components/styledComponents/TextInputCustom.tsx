import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

type Props = {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  value: string;
};

const TextInputCustom = ({
  placeholder,
  onChangeText,
  secureTextEntry = false,
  value,
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      value={value}
    />
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    borderRadius: 8,
    padding: 8,
  },
});
