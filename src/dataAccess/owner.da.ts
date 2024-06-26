import {DB} from '@/clients/firebase.app';
import {IOwner} from '@/models/owner.model';
import {doc, getDoc, setDoc} from 'firebase/firestore';

export default class OwnerDA {
  private static instance: OwnerDA;
  private ENTITY_NAME = 'owners';
  private constructor() {}
  /**
   * Retrieve the singleton instance of OwnerDA.
   *
   * This method is a way to get the instance of the OwnerDA class, as this class is a
   * singleton (only one instance of it is needed in the whole application).
   *
   * @return {OwnerDA} The singleton instance of OwnerDA
   */
  public static getInstance(): OwnerDA {
    if (!OwnerDA.instance) {
      // If there is no instance created yet, create a new one
      OwnerDA.instance = new OwnerDA();
    }
    // Return the Singleton instance of OwnerDA
    return OwnerDA.instance;
  }
  /**
   * Add a new document in the "owners" collection.
   *
   * This method adds a new document to the "owners" collection in Firestore, using
   * the provided ownerId and ownerData.
   *
   * @param {string} ownerId - The ID of the owner to create
   * @param {Partial<IOwner>} ownerData - The data of the owner to create
   * @return {Promise<void>} A promise that resolves when the document is successfully added
   */
  async create(
    ownerId: string,
    ownerData: Partial<IOwner>,
  ): Promise<Partial<IOwner>> {
    // Add a new document in collection "owners"
    // using the owner's id and data provided
    await setDoc(doc(DB, this.ENTITY_NAME, ownerId), ownerData);
    return ownerData;
  }
  /**
   * Find one owner by its ID.
   *
   * This method retrieves an owner from the "owners" collection in Firestore
   * using its ID as a parameter. If the owner exists, it returns its data.
   *
   * @param {string} ownerId - The ID of the owner to find.
   * @return {Promise<IOwner>} The data of the found owner, if it exists.
   */
  async findOne(ownerId: string): Promise<IOwner> {
    const docRef = doc(DB, this.ENTITY_NAME, ownerId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      throw Error(`Owner with id ${ownerId} does not exist`);
    }
    return docSnap.data() as IOwner;
  }
}
