import { db } from '../firebase/firebase';
import { useState, useEffect } from 'react';

export function useLeagueTeams({ leagueId }) {
  const [availableLeagueTeams, setAvailableLeagueTeams] = useState([]);


  useEffect(() => {
    const unsubscribe = db.collection('leagues')
      .doc(leagueId)
      .collection('teams')
      .onSnapshot(snapshot => {
        setAvailableLeagueTeams(snapshot.docs.map(doc => ({
          id: doc.id,
          team: doc.data()
        })))
      })

    return () => unsubscribe();
  }, [leagueId])

  return availableLeagueTeams;
}