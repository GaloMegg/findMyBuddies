import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children: ReactElement[];
};

/**
 * A function that renders a card component with the provided element.
 *
 * @param {Props} element - the element to be rendered within the card
 * @return {JSX.Element} the card component with the provided element
 */
const Card = ({children}: Props) => {
  return <View>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({});
