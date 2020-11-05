import { useState } from 'react';
import db from '../lib/firebase';

export function useFetch(collectionPath, numRecords, isAllowLoad, setIsAllowLoad) {
  const [records, setRecords] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  if (isAllowLoad) {
    db.collection(collectionPath).limit(numRecords)
      .orderBy('timestamp', 'desc')
      .onSnapshot((querySnapshot) => {

        if (querySnapshot.docs.length === 0) {
          setIsLoaded(true);
          setIsAllowLoad(false);
        }
        let allRecords = [];
        querySnapshot.docs.forEach((doc, index) => {
          const record = doc.data();
          record.id = doc.id;
          record.user.get()
            .then(doc => doc.data())
            .then(userData => { record.userData = userData })
            .then(() => {
              allRecords.push(record);
              if (index === querySnapshot.docs.length - 1) {
                setRecords(allRecords);
                setIsLoaded(true);
                setIsAllowLoad(false);
              }
            });
        });
      });
  }
  return [records, setRecords, isLoaded];
}