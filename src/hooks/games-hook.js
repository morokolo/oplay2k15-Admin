import { db } from '../firebase/firebase';
import { useState, useEffect } from 'react';

export function useGames({ leagueId }) {
  const [availableLeagueGames, setAvailableLeagueGames] = useState([]);


  useEffect(() => {
    const unsubscribe = db.collection('leagues')
      .doc(leagueId)
      .collection('matches')
      .onSnapshot(snapshot => {
        setAvailableLeagueGames(snapshot.docs.map(doc => ({
          id: doc.id,
          games: doc.data()
        })))
      })

    return () => unsubscribe();
  }, [leagueId])

  return availableLeagueGames;
}