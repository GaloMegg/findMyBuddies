import {DB} from '@/clients/firebase.app';
import {IBuddy} from '@/models/buddy.model';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

export default class BuddyDA {
  private static instance: BuddyDA;
  private ENTITY_NAME = 'buddies';
  private constructor() {}
  /**
   * Retrieve the singleton instance of BuddyDA.
   *
   * This method is a way to get the instance of the BuddyDA class, as this class is a
   * singleton (only one instance of it is needed in the whole application).
   *
   * @return {BuddyDA} The singleton instance of BuddyDA
   */
  public static getInstance(): BuddyDA {
    if (!BuddyDA.instance) {
      BuddyDA.instance = new BuddyDA();
    }
    return BuddyDA.instance;
  }
  /**
   * Add a new document in the "buddies" collection.
   *
   * @param {string} buddyId - the id of the buddy to create
   * @param {Partial<IOwner>} BuddyData - the data of the buddy to create
   * @return {Promise<void>} a promise that resolves when the document is successfully added
   */
  async create(buddyId: string, BuddyData: Partial<IBuddy>): Promise<void> {
    // Add a new document in the "buddies" collection
    // using the buddy's id and data provided
    await setDoc(doc(DB, this.ENTITY_NAME, buddyId), BuddyData);
  }
  /**
   * Find a buddy document by its owner id.
   *
   * @param {string} ownerId - The id of the owner of the buddy document
   * @return {Promise<any>} A promise that resolves with the data of the found buddy document,
   * or null if no document is found.
   */
  async findOne(ownerId: string): Promise<any> {
    const docRef = doc(DB, this.ENTITY_NAME, ownerId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }
  /**
   * A description of the entire function.
   *
   * @param {string} ownerId - description of parameter
   * @return {Promise<IBuddy[]>} description of return value
   */
  async findAll(ownerId: string): Promise<IBuddy[]> {
    const buddies: IBuddy[] = [];
    const queryRequest = query(
      collection(DB, this.ENTITY_NAME),
      where('ownerId', '==', ownerId),
    );
    const docSnaps = await getDocs(queryRequest);
    docSnaps.forEach(docSnap => buddies.push(docSnap.data() as IBuddy));
    return buddies;
  }
}
