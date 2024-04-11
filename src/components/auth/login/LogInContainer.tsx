import React, { ReactNode } from 'react'
import SignUp from './LogIn'
import useUserData from './useUserData'

const LogInContainer = (): ReactNode => {
  const { userData, setUserDataHandler } = useUserData()
  return (
      <SignUp {...userData} setUserDataHandler={setUserDataHandler} />
  )
}

export default LogInContainer

// const styles = StyleSheet.create({});
