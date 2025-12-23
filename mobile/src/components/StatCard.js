import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';

export default function StatCard({ label, value, subLabel }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      {subLabel ? <Text style={styles.subLabel}>{subLabel}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border
  },
  label: {
    fontSize: typography.small,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.6
  },
  value: {
    marginTop: 8,
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary
  },
  subLabel: {
    marginTop: 6,
    fontSize: typography.small,
    color: colors.textSecondary
  }
});
