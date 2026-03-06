const readBoolean = (value, fallback = false) => {
  if (value === undefined) return fallback;
  const normalized = String(value).trim().toLowerCase();
  return normalized === '1' || normalized === 'true' || normalized === 'yes';
};

const config = {
  useSampleData: readBoolean(process.env.EXPO_PUBLIC_USE_SAMPLE_DATA, false),
  dynamoTables: {
    leads: process.env.EXPO_PUBLIC_DDB_LEADS_TABLE || 'AI17Leads',
    callLogs: process.env.EXPO_PUBLIC_DDB_CALL_LOGS_TABLE || 'AI17CallLogs',
    appointments: process.env.EXPO_PUBLIC_DDB_APPOINTMENTS_TABLE || 'AI17Appointments',
    payouts: process.env.EXPO_PUBLIC_DDB_PAYOUTS_TABLE || 'AI17Payouts'
  },
  dynamoIndexes: {
    appointmentsByUser:
      process.env.EXPO_PUBLIC_DDB_APPOINTMENTS_BY_USER_INDEX || 'createdBy-scheduledAt-index'
  },
};

export default config;
