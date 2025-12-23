import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import config from '../constants/config';
import { getDb } from './firebase';
import { getAuthenticatedUserId } from './authService';

export const logCall = async ({ leadId, outcome, notes, followUp }) => {
  if (config.useSampleData) {
    return true;
  }

  const userId = await getAuthenticatedUserId();
  if (!userId) return false;

  const db = getDb();
  await addDoc(collection(db, 'callLogs'), {
    leadId,
    outcome,
    notes: notes || null,
    followUp: followUp || null,
    createdBy: userId,
    timestamp: serverTimestamp()
  });

  return true;
};
