import {ILocation} from './common.model';

export interface IOwner {
  ownerId: string;
  name: string;
  phoneNumber: string;
  email: string;
  location: ILocation;
}
