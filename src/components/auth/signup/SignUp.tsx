import {createAccountWithEmailAndPassword} from '@/clients/firebase.auth';
import TextInputCustom from '@/components/styledComponents/TextInputCustom';
import OwnerService from '@/service/owner.service';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

type Props = {
  name: string;
  email: string;
  password: string;
  setUserDataHandler: (prop: string, value: string) => void;
};

/**
 * Component for rendering a sign-up form.
 *
 * The component takes in three properties:
 * 1. name: The name of the user
 * 2. email: The email of the user
 * 3. password: The password of the user
 * 4. setUserDataHandler: A handler function for setting user data. The function
 * takes in two arguments: the name of the property to set and the new value.
 *
 * @param {Props} name - The name of the user
 * @param {Props} email - The email of the user
 * @param {Props} password - The password of the user
 * @param {Props} setUserDataHandler - The handler for setting user data
 * @return {JSX.Element} The sign-up form component
 */
const SignUp = ({
  name,
  email,
  password,
  setUserDataHandler,
}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* Name input */}
      <TextInputCustom
        placeholder="Name"
        onChangeText={(text: string) => setUserDataHandler('name', text)}
        value={name}
      />
      {/* Email input */}
      <TextInputCustom
        placeholder="Email"
        value={email}
        onChangeText={(text: string) => setUserDataHandler('email', text)}
      />
      {/* Password input */}
      <TextInputCustom
        placeholder="Password"
        onChangeText={(text: string) => setUserDataHandler('password', text)}
        secureTextEntry={true}
        value={password}
      />
      {/* Sign up button */}
      <Button
        title="Sign Up"
        onPress={async () => {
          const userId = await createAccountWithEmailAndPassword(
            email,
            password,
          );
          const ownerService = OwnerService.getInstance();
          ownerService.create(userId, {
            buddies: [],
            name,
            email,
            location: {latitude: 0, longitude: 0},
            ownerId: userId,
            phoneNumber: '',
          });
        }}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
