import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import config from '../constants/config';
import { sampleLeads } from '../data/sampleLeads';
import { getDb } from './firebase';
import { getAuthenticatedUserId } from './authService';

const emptySnapshot = {
  notContacted: 0,
  activeConversations: 0,
  appointments: 0,
  lastLoggedCall: '--'
};

const formatDateTime = (isoString) => {
  if (!isoString) return '--';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return '--';
  return date.toLocaleString();
};

export const getPerformanceSnapshot = async () => {
  if (config.useSampleData) {
    const totals = sampleLeads.reduce(
      (acc, lead) => {
        const status = lead.status || 'not-contacted';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      },
      { 'not-contacted': 0, 'in-progress': 0, 'appointment-set': 0 }
    );

    return {
      notContacted: totals['not-contacted'],
      activeConversations: totals['in-progress'],
      appointments: totals['appointment-set'],
      lastLoggedCall: formatDateTime(sampleLeads[1]?.lastContact)
    };
  }

  const userId = await getAuthenticatedUserId();
  if (!userId) return emptySnapshot;

  const db = getDb();
  const leadsQuery = query(collection(db, 'leads'), where('assignedTo', '==', userId));
  const leadsSnap = await getDocs(leadsQuery);

  const totals = { 'not-contacted': 0, 'in-progress': 0, 'appointment-set': 0 };
  leadsSnap.forEach((doc) => {
    const data = doc.data();
    const status = data.status || 'not-contacted';
    totals[status] = (totals[status] || 0) + 1;
  });

  const callsQuery = query(
    collection(db, 'callLogs'),
    where('createdBy', '==', userId),
    orderBy('timestamp', 'desc'),
    limit(1)
  );
  const callSnap = await getDocs(callsQuery);
  const lastCall = callSnap.docs[0]?.data()?.timestamp || null;

  return {
    notContacted: totals['not-contacted'],
    activeConversations: totals['in-progress'],
    appointments: totals['appointment-set'],
    lastLoggedCall: formatDateTime(lastCall)
  };
};
