import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';

export default function LeadCard({ lead, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.business}>{lead.businessName}</Text>
        <Text style={styles.industry}>{lead.industry}</Text>
      </View>
      <Text style={styles.owner}>Owner: {lead.ownerName}</Text>
      <Text style={styles.meta}>{lead.location} | {lead.timezone}</Text>
      <View style={styles.statusRow}>
        <Text style={styles.statusLabel}>Status</Text>
        <Text style={styles.statusValue}>{formatStatus(lead.status)}</Text>
      </View>
    </Pressable>
  );
}

const formatStatus = (value) => {
  if (!value) return 'Not contacted';
  return value.replace(/-/g, ' ');
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  business: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.textPrimary
  },
  industry: {
    fontSize: typography.small,
    color: colors.primary,
    fontWeight: '600'
  },
  owner: {
    marginTop: 6,
    color: colors.textSecondary
  },
  meta: {
    marginTop: 4,
    color: colors.textSecondary,
    fontSize: typography.small
  },
  statusRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  statusLabel: {
    fontSize: typography.small,
    color: colors.textSecondary
  },
  statusValue: {
    fontWeight: '600',
    color: colors.textPrimary
  }
});
