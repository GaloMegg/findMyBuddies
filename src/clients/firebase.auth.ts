import {createUserWithEmailAndPassword} from 'firebase/auth';
import {AUTH} from './firebase.app';

/**
 * Creates an account with the given email and password.
 *
 * @param {string} email - the email for the account
 * @param {string} password - the password for the account
 * @return {Promise<string>} a promise that resolves with the user credential
 */
export const createAccountWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<string> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      AUTH,
      email,
      password,
    );
    const {uid} = userCredential.user;
    return uid;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
