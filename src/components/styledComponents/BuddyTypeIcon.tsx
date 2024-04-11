import CAT from 'assets/icons/buddiestype/cat.png'
import DOG from 'assets/icons/buddiestype/dog.png'
import OTHER from 'assets/icons/buddiestype/other.png'

import { EBuddyType } from 'models/buddy.model'
import React from 'react'
import { Image, ImageSourcePropType, StyleSheet } from 'react-native'

type Props = {
  buddyType: EBuddyType
  width: number
  height: number
}

const buddyTypes: {
  [buddyType in EBuddyType]: ImageSourcePropType | undefined
} = {
  CAT,
  DOG,
  OTHER
}

const BuddyTypeIcon = ({ buddyType, width, height }: Props) => {
  return (
    <Image
      resizeMode={'contain'}
      style={{ width, height }}
      source={buddyTypes[buddyType]}
    />
  )
}

export default BuddyTypeIcon

const styles = StyleSheet.create({})
