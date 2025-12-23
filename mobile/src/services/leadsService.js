import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import config from '../constants/config';
import { sampleLeads } from '../data/sampleLeads';
import { getDb } from './firebase';
import { getAuthenticatedUserId } from './authService';

export const getLeads = async () => {
  if (config.useSampleData) {
    return sampleLeads;
  }

  const userId = await getAuthenticatedUserId();
  if (!userId) return [];

  const db = getDb();
  const leadsQuery = query(collection(db, 'leads'), where('assignedTo', '==', userId));
  const snap = await getDocs(leadsQuery);
  return snap.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
};

export const getLeadById = async (leadId) => {
  if (config.useSampleData) {
    return sampleLeads.find((lead) => lead.id === leadId) || null;
  }

  const db = getDb();
  const leadRef = doc(db, 'leads', leadId);
  const snap = await getDoc(leadRef);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};

export const updateLeadStatus = async (leadId, status) => {
  if (config.useSampleData) {
    return true;
  }

  const db = getDb();
  const leadRef = doc(db, 'leads', leadId);
  await updateDoc(leadRef, { status });
  return true;
};
