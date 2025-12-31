import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';
import { loginWithEmail, loginWithSSO, getAuthenticatedUserId, logout } from '../services/authService';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const checkExistingSession = async () => {
      const userId = await getAuthenticatedUserId();
      if (userId && isMounted) {
        navigation.replace('Dashboard');
      }
    };
    checkExistingSession();
    return () => {
      isMounted = false;
    };
  }, [navigation]);

  const handleEmailLogin = async () => {
    try {
      setSubmitting(true);
      await loginWithEmail(email.trim(), password);
      navigation.replace('Dashboard');
    } catch (error) {
      if (error?.name === 'UserAlreadyAuthenticatedException') {
        await logout();
        await loginWithEmail(email.trim(), password);
        navigation.replace('Dashboard');
        return;
      }
      Alert.alert(
        'Login failed',
        error?.message || error?.name || JSON.stringify(error)
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleSSO = async () => {
    try {
      setSubmitting(true);
      await loginWithSSO();
    } catch (error) {
      Alert.alert('SSO failed', error?.message || 'Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>AI17 Outreach HQ</Text>
      <Text style={styles.subtitle}>Log in to see your performance and leads.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          style={[styles.primaryButton, submitting && styles.disabled]}
          onPress={handleEmailLogin}
          disabled={submitting}
        >
          <Text style={styles.primaryButtonText}>Sign in</Text>
        </Pressable>

        <Pressable
          style={[styles.secondaryButton, submitting && styles.disabled]}
          onPress={handleSSO}
          disabled={submitting}
        >
          <Text style={styles.secondaryButtonText}>Continue with SSO</Text>
        </Pressable>
      </View>

      <Text style={styles.helper}>Need access? Contact your AI17 admin.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: 'center'
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
    textAlign: 'center'
  },
  subtitle: {
    marginTop: 8,
    fontSize: typography.body,
    color: colors.textSecondary,
    textAlign: 'center'
  },
  form: {
    marginTop: 32
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    marginBottom: 12,
    fontSize: typography.body
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
  },
  disabled: {
    opacity: 0.6
  },
  helper: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: typography.small,
    color: colors.textSecondary
  }
});
