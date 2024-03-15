import {ILocation} from './common.model';

export interface IOwner {
  ownerId: string;
  buddies: string[]; // id of buddies
  name: string;
  phoneNumber: string;
  email: string;
  location: ILocation;
}
