import useGetBuddies from 'hooks/useGetBuddies'
import React from 'react'
import {StyleSheet, Text} from 'react-native'
import ViewAllBuddies from './ViewAllBuddies'

type Props = {}

const ViewAllBuddiesContainer = ({}: Props) => {
  const {buddies, deleteBuddy, loading} = useGetBuddies({
    ownerId: 'r85AaNEsNBe5xkMs67E1eaxQYGg1',
  })
  if (loading)
    return (
      <>
        <Text>Loading</Text>
      </>
    )
  return <ViewAllBuddies buddies={buddies} />
}

export default ViewAllBuddiesContainer

const styles = StyleSheet.create({})
