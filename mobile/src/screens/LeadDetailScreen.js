import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Pressable,
  TextInput,
  Alert,
  Linking
} from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';
import { getLeadById, updateLeadStatus } from '../services/leadsService';
import { logCall } from '../services/callLogService';
import { createAppointment } from '../services/appointmentService';

const statuses = [
  { value: 'not-contacted', label: 'Not contacted' },
  { value: 'in-progress', label: 'Active conversation' },
  { value: 'appointment-set', label: 'Appointment set' }
];

const outcomes = [
  { value: 'connected', label: 'Connected' },
  { value: 'left-voicemail', label: 'Left voicemail' },
  { value: 'no-answer', label: 'No answer' },
  { value: 'appointment-set', label: 'Appointment set' }
];

export default function LeadDetailScreen({ route }) {
  const { leadId } = route.params;
  const [lead, setLead] = useState(null);
  const [status, setStatus] = useState('not-contacted');
  const [outcome, setOutcome] = useState('connected');
  const [notes, setNotes] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await getLeadById(leadId);
      setLead(data);
      if (data?.status) setStatus(data.status);
    };
    load();
  }, [leadId]);

  const handleSaveStatus = async () => {
    try {
      setSaving(true);
      await updateLeadStatus(leadId, status);
      Alert.alert('Saved', 'Lead status updated.');
    } catch (error) {
      Alert.alert('Error', 'Unable to save status.');
    } finally {
      setSaving(false);
    }
  };

  const handleLogCall = async () => {
    const trimmedNotes = notes.trim();
    const parsedAppointment = parseDateInput(appointmentTime);
    const isAppointmentOutcome = outcome === 'appointment-set';

    if (isAppointmentOutcome && !parsedAppointment) {
      Alert.alert(
        'Appointment time required',
        'Enter a valid appointment date/time before saving.'
      );
      return;
    }

    const targetStatus = isAppointmentOutcome ? 'appointment-set' : 'in-progress';
    const nowIso = new Date().toISOString();

    try {
      setSaving(true);
      const writes = [
        updateLeadStatus(leadId, targetStatus),
        logCall({
          leadId,
          outcome,
          notes: trimmedNotes,
          followUp: parsedAppointment || null
        })
      ];

      if (isAppointmentOutcome) {
        writes.push(
          createAppointment({
            leadId,
            scheduledAt: parsedAppointment,
            notes: trimmedNotes,
            leadBusinessName: lead?.businessName,
            leadOwnerName: lead?.ownerName
          })
        );
      }

      await Promise.all(writes);

      setLead((prev) => ({
        ...prev,
        status: targetStatus,
        lastOutcome: outcome,
        lastContact: nowIso
      }));
      setStatus(targetStatus);
      setNotes('');
      setAppointmentTime('');
      Alert.alert(
        'Saved',
        isAppointmentOutcome
          ? 'Call logged and appointment saved.'
          : 'Call logged and lead status synced.'
      );
    } catch (error) {
      Alert.alert('Error', 'Unable to log call.');
    } finally {
      setSaving(false);
    }
  };

  const handleDialLead = async () => {
    const rawPhone = lead?.phone || '';
    const cleanPhone = rawPhone.replace(/[^\d+]/g, '');
    if (!cleanPhone) {
      Alert.alert('Missing number', 'No phone number is available for this lead.');
      return;
    }

    const telUrl = `tel:${cleanPhone}`;
    const canOpen = await Linking.canOpenURL(telUrl);
    if (!canOpen) {
      Alert.alert('Unable to call', 'This device cannot start phone calls.');
      return;
    }

    await Linking.openURL(telUrl);
  };

  if (!lead) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{lead.businessName}</Text>
      <Text style={styles.meta}>Owner: {lead.ownerName}</Text>
      <Text style={styles.meta}>{lead.phone}</Text>
      <Text style={styles.meta}>{lead.location} | {lead.timezone}</Text>
      <Pressable style={styles.callButton} onPress={handleDialLead}>
        <Text style={styles.callButtonText}>Call lead</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Status</Text>
      <View style={styles.pillRow}>
        {statuses.map((item) => (
          <Pressable
            key={item.value}
            style={[styles.pill, status === item.value && styles.pillActive]}
            onPress={() => setStatus(item.value)}
          >
            <Text style={[styles.pillText, status === item.value && styles.pillTextActive]}>
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.primaryButton} onPress={handleSaveStatus} disabled={saving}>
        <Text style={styles.primaryButtonText}>Save status</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Quick log call</Text>
      <View style={styles.pillRow}>
        {outcomes.map((item) => (
          <Pressable
            key={item.value}
            style={[styles.pill, outcome === item.value && styles.pillActive]}
            onPress={() => setOutcome(item.value)}
          >
            <Text style={[styles.pillText, outcome === item.value && styles.pillTextActive]}>
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
      <TextInput
        style={styles.textarea}
        placeholder="Notes from the call"
        value={notes}
        onChangeText={setNotes}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Appointment time (e.g. 2026-03-06 14:30)"
        value={appointmentTime}
        onChangeText={setAppointmentTime}
      />
      <Pressable style={styles.secondaryButton} onPress={handleLogCall} disabled={saving}>
        <Text style={styles.secondaryButtonText}>Save call log</Text>
      </Pressable>
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
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary
  },
  meta: {
    marginTop: 6,
    fontSize: typography.body,
    color: colors.textSecondary
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.textPrimary
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12
  },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface
  },
  pillActive: {
    borderColor: colors.primary,
    backgroundColor: '#FDF2EC'
  },
  pillText: {
    fontSize: typography.small,
    color: colors.textSecondary
  },
  pillTextActive: {
    color: colors.primary,
    fontWeight: '600'
  },
  primaryButton: {
    marginTop: 14,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center'
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600'
  },
  callButton: {
    marginTop: 12,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center'
  },
  callButtonText: {
    color: '#FFFFFF',
    fontWeight: '600'
  },
  textarea: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top'
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12
  },
  secondaryButton: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center'
  },
  secondaryButtonText: {
    color: colors.primary,
    fontWeight: '600'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background
  }
});

const parseDateInput = (value) => {
  const input = value?.trim();
  if (!input) return null;

  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString();
};
