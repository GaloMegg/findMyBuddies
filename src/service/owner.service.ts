import OwnerDA from '@/dataAccess/owner.da';
import {IOwner} from '@/models/owner.model';

export default class OwnerService {
  private static instance: OwnerService;
  private constructor() {}
  /**
   * Returns an instance of OwnerService, creating a new one if it doesn't exist.
   *
   * @return {OwnerService} The instance of OwnerService
   */
  public static getInstance(): OwnerService {
    if (!OwnerService.instance) {
      OwnerService.instance = new OwnerService();
    }
    return OwnerService.instance;
  }
  private ownerDA = OwnerDA.getInstance();

  /**
   * A description of the entire function.
   *
   * @param {string} ownerId - description of parameter
   * @param {Partial<IOwner>} ownerData - description of parameter
   * @return {Partial<IOwner>} description of return value
   */
  async create(
    ownerId: string,
    ownerData: Partial<IOwner>,
  ): Promise<Partial<IOwner>> {
    return await this.ownerDA.create(ownerId, ownerData);
  }
}
