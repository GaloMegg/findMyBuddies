export interface IBuddy {
  type: EBuddyType;
  buddyId: string;
  name: string;
  breed: string;
  ownerId: string;
  status: EBuddyStatus;
  image?: Buffer;
}

export enum EBuddyType {
  CAT = 'CAT',
  DOG = 'DOG',
  OTHER = 'OTHER',
}

export enum EBuddyStatus {
  SAFE,
  LOST,
}
