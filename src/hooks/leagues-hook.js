import { db } from '../firebase/firebase';
import { useState, useEffect } from 'react';

export function useAvailableLeagues() {
  const [availableLeagues, setAvailableLeagues] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('leagues').onSnapshot(snapshot => {
      setAvailableLeagues(snapshot.docs.map(doc => ({
        id: doc.id,
        league: doc.data()
      })))
    })

    return () => unsubscribe();
  }, [])

  return availableLeagues;
}