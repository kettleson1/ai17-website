import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';
import { getAppointments } from '../services/appointmentService';
import { getLeads } from '../services/leadsService';

const formatDateTime = (value) => {
  if (!value) return '--';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '--';
  return date.toLocaleString();
};

export default function AppointmentsScreen() {
  const [appointments, setAppointments] = useState(null);
  const [leadNamesById, setLeadNamesById] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const loadData = useCallback(async () => {
    const [appointmentsData, leadsData] = await Promise.all([
      getAppointments(),
      getLeads().catch(() => []),
    ]);

    const names = {};
    leadsData.forEach((lead) => {
      names[lead.id] = lead.businessName;
    });

    setLeadNamesById(names);
    setAppointments(appointmentsData);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      await loadData();
    } finally {
      setRefreshing(false);
    }
  };

  if (!appointments) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      data={appointments}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>Booked appointments</Text>
          <Text style={styles.subtitle}>Review and confirm what has been scheduled.</Text>
        </View>
      }
      ListEmptyComponent={
        <View style={styles.emptyCard}>
          <Text style={styles.emptyText}>No appointments booked yet.</Text>
        </View>
      }
      renderItem={({ item }) => {
        const businessName =
          item.leadBusinessName || leadNamesById[item.leadId] || 'Unknown business';
        return (
          <View style={styles.card}>
            <Text style={styles.businessName}>{businessName}</Text>
            <Text style={styles.meta}>Lead ID: {item.leadId}</Text>
            <Text style={styles.meta}>Owner: {item.leadOwnerName || '--'}</Text>
            <Text style={styles.meta}>Scheduled: {formatDateTime(item.scheduledAt)}</Text>
            <Text style={styles.meta}>Status: {item.status}</Text>
            {item.notes ? <Text style={styles.notes}>Notes: {item.notes}</Text> : null}
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 28,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  subtitle: {
    marginTop: 4,
    color: colors.textSecondary,
    fontSize: typography.body,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },
  businessName: {
    fontSize: typography.subtitle,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: 8,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: typography.body,
    marginBottom: 4,
  },
  notes: {
    marginTop: 8,
    color: colors.textPrimary,
    fontSize: typography.body,
  },
  emptyCard: {
    marginTop: 6,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: typography.body,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
