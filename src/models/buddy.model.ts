export interface IBuddy {
  type: EBuddyType;
  BuddyId: string;
  Name: string;
  Bred: string;
  Ownerid: string;
  Status: EBuddyStatus;
  Image: Buffer;
}

export enum EBuddyType {
  CAT,
  DOG,
  OTHER,
}

export enum EBuddyStatus {
  SAFE,
  LOST,
}
