import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IBuddy} from '../../../../models/buddy.model';
import {ICONS} from '../../../../utils/icons';
import Card from '../../../styledComponents/Card';
type Props = {
  buddies: IBuddy[];
};

/**
 * Renders a View displaying all the buddies.
 *
 * @param {Props} buddies - The list of buddies to display
 * @return {JSX.Element} The View displaying all buddies
 */
const ViewAllBuddies = ({buddies}: Props) => {
  return (
    <View>
      <Text>ViewAllBuddies</Text>
      <FlatList
        renderItem={({item}) => {
          console.log(ICONS[item.type]());
          return (
            <Card>
              <Text>{item.name}</Text>
              {/*   TODO ADD SVG
A               <View><DOG /></View> */}
              <Text>{item.status}</Text>
              <Text>{item.breed}</Text>
              <Text>{item.image}</Text>
            </Card>
          );
        }}
        data={buddies}
        keyExtractor={item => item.buddyId}
      />
    </View>
  );
};

export default ViewAllBuddies;

const styles = StyleSheet.create({});
