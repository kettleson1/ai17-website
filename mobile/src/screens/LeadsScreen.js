import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import LeadCard from '../components/LeadCard';
import colors from '../theme/colors';
import typography from '../theme/typography';
import { getLeads } from '../services/leadsService';

export default function LeadsScreen({ navigation }) {
  const [leads, setLeads] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await getLeads();
      setLeads(data);
    };
    load();
  }, []);

  if (!leads) {
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
      data={leads}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <LeadCard lead={item} onPress={() => navigation.navigate('LeadDetail', { leadId: item.id })} />
      )}
      ListHeaderComponent={<Text style={styles.title}>Lead queue</Text>}
    />
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
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background
  }
});
