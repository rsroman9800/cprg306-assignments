// Import necessary Firebase functions
import { db } from '../_utils/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export async function getItems(userId) {
    try {
        const itemsCollection = collection(db, 'users', userId, 'items');
        const querySnapshot = await getDocs(itemsCollection);
        
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        return items;
    } catch (error) {
        console.error('Error getting items:', error);
        throw error;
    }
}

export async function addItem(userId, item) {
    try {
        const itemsCollection = collection(db, 'users', userId, 'items');
        const docRef = await addDoc(itemsCollection, item);
        return docRef.id;
    } catch (error) {
        console.error('Error adding item:', error);
        throw error;
    }
}