import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import StatCard from '../components/StatCard';
import colors from '../theme/colors';
import typography from '../theme/typography';
import { getPerformanceSnapshot } from '../services/metricsService';
import { getPayoutSnapshot } from '../services/payoutsService';

export default function DashboardScreen({ navigation }) {
  const [snapshot, setSnapshot] = useState(null);
  const [payouts, setPayouts] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const [snapshotData, payoutData] = await Promise.all([
        getPerformanceSnapshot(),
        getPayoutSnapshot()
      ]);
      setSnapshot(snapshotData);
      setPayouts(payoutData);
    };
    loadData();
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Performance snapshot</Text>
      {!snapshot ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <View style={styles.grid}>
          <StatCard label="Not contacted" value={snapshot.notContacted} />
          <StatCard label="Active conversations" value={snapshot.activeConversations} />
          <StatCard label="Appointments" value={snapshot.appointments} />
          <StatCard label="Last logged call" value={snapshot.lastLoggedCall} />
        </View>
      )}

      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Payout tracker</Text>
        <Text style={styles.subtitle}>$5 per kept appointment, $50 per new business.</Text>
      </View>
      {!payouts ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <View style={styles.payoutCard}>
          <View style={styles.payoutRow}>
            <Text style={styles.payoutLabel}>Instant payouts (today)</Text>
            <Text style={styles.payoutValue}>${payouts.instant}</Text>
          </View>
          <View style={styles.payoutRow}>
            <Text style={styles.payoutLabel}>Weekly payouts (week to date)</Text>
            <Text style={styles.payoutValue}>${payouts.weekly}</Text>
          </View>
          <View style={styles.payoutRow}>
            <Text style={styles.payoutLabel}>Last weekly payout</Text>
            <Text style={styles.payoutValue}>{payouts.lastPaidAt}</Text>
          </View>
        </View>
      )}

      <View style={styles.actions}>
        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Leads')}>
          <Text style={styles.primaryButtonText}>Open lead queue</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate('Scripts')}>
          <Text style={styles.secondaryButtonText}>Call scripts</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    padding: 20
  },
  title: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 12
  },
  subtitle: {
    fontSize: typography.small,
    color: colors.textSecondary
  },
  grid: {
    gap: 12
  },
  sectionHeader: {
    marginTop: 24,
    marginBottom: 12
  },
  payoutCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border
  },
  payoutRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  payoutLabel: {
    fontSize: typography.body,
    color: colors.textSecondary,
    flex: 1
  },
  payoutValue: {
    fontWeight: '600',
    color: colors.textPrimary
  },
  actions: {
    marginTop: 24
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center'
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600'
  },
  secondaryButton: {
    marginTop: 12,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary
  },
  secondaryButtonText: {
    color: colors.primary,
    fontWeight: '600'
  }
});
