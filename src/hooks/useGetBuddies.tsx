import {useEffect, useState} from 'react';
import {IBuddy} from '../models/buddy.model';
import BuddyService from '../service/buddy.service';

type Props = {
  ownerId: string;
};
const buddyService = BuddyService.getInstance();
const useGetBuddies = ({ownerId}: Props) => {
  const [buddies, setBuddies] = useState<IBuddy[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllBuddies = async (ownerId: string) => {
    try {
      const result = await buddyService.findAll(ownerId);
      setBuddies(result);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    if (ownerId) {
      getAllBuddies(ownerId);
    }
    return () => {
      setBuddies([]);
      setLoading(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownerId]);

  return {
    buddies,
    loading,
  };
};

export default useGetBuddies;
