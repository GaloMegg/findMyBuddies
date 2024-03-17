import React from 'react';
import {StyleSheet} from 'react-native';
import useGetBuddies from '../../../../hooks/useGetBuddies';
import ViewAllBuddies from './ViewAllBuddies';

type Props = {};

const ViewAllBuddiesContainer = ({}: Props) => {
  const {buddies} = useGetBuddies({ownerId: 'r85AaNEsNBe5xkMs67E1eaxQYGg1'});
  return <ViewAllBuddies buddies={buddies} />;
};

export default ViewAllBuddiesContainer;

const styles = StyleSheet.create({});
