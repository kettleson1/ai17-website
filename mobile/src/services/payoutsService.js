import { collection, getDocs, query, where } from 'firebase/firestore';
import config from '../constants/config';
import { getDb } from './firebase';
import { getAuthenticatedUserId } from './authService';

const samplePayouts = {
  instant: 10,
  weekly: 50,
  lastPaidAt: '2024-07-01T20:00:00.000Z'
};

const formatDate = (isoString) => {
  if (!isoString) return '--';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return '--';
  return date.toLocaleDateString();
};

export const getPayoutSnapshot = async () => {
  if (config.useSampleData) {
    return {
      instant: samplePayouts.instant,
      weekly: samplePayouts.weekly,
      lastPaidAt: formatDate(samplePayouts.lastPaidAt)
    };
  }

  const userId = await getAuthenticatedUserId();
  if (!userId) {
    return { instant: 0, weekly: 0, lastPaidAt: '--' };
  }

  const db = getDb();
  const payoutsQuery = query(collection(db, 'payouts'), where('userId', '==', userId));
  const snap = await getDocs(payoutsQuery);
  let instant = 0;
  let weekly = 0;
  let lastPaidAt = null;

  snap.forEach((docSnap) => {
    const data = docSnap.data();
    if (data.type === 'instant') {
      instant += data.amount || 0;
    } else if (data.type === 'weekly') {
      weekly += data.amount || 0;
      if (!lastPaidAt || (data.paidAt && data.paidAt > lastPaidAt)) {
        lastPaidAt = data.paidAt;
      }
    }
  });

  return {
    instant,
    weekly,
    lastPaidAt: formatDate(lastPaidAt)
  };
};
