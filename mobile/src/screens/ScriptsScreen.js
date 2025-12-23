import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';
import { callScripts } from '../data/callScripts';

export default function ScriptsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Call scripts</Text>
      <Text style={styles.subtitle}>
        Keep it conversational. Focus on setting the 30-minute discovery call.
      </Text>

      {callScripts.map((script) => (
        <View key={script.id} style={styles.card}>
          <Text style={styles.cardTitle}>{script.title}</Text>
          {script.lines.map((line, index) => (
            <Text key={index} style={styles.line}>- {line}</Text>
          ))}
        </View>
      ))}
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
    marginBottom: 8
  },
  subtitle: {
    fontSize: typography.body,
    color: colors.textSecondary,
    marginBottom: 16
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12
  },
  cardTitle: {
    fontSize: typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 8
  },
  line: {
    fontSize: typography.body,
    color: colors.textSecondary,
    marginBottom: 6
  }
});
