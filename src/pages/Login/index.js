import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

import styles from './styles';
import { useAuthContext } from '../../contexts/auth';

export default function Login() {
  const [viewPassword, setViewPassword] = useState(false);

  const { colors } = useTheme();
  const { signIn } = useAuthContext();

  function handleSignIn() {
    signIn();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[ styles.appName, { color: colors.text }]} >InstaFollowers</Text>

      <View>
        <View style={[ styles.inputContainer, { backgroundColor: colors.card }]}>
          <Icon name="user" size={20} color={colors.text} />
          <TextInput
            style={[styles.input, { color: colors.text }]}
            placeholder="Nome de usuário..."
            placeholderTextColor={ colors.placeholder }
            autoCompleteType="username"
            returnKeyType="next"
            onSubmitEditing={() => password.focus()}
          />
        </View>

        <View style={[ styles.inputContainer, { backgroundColor: colors.card }]}>
          <Icon name="lock" size={20} color={colors.text} />
          <TextInput
            style={[styles.input, { color: colors.text }]}
            ref={(input) => password = input}
            placeholder="Senha..."
            placeholderTextColor={colors.placeholder}
            autoCompleteType="password"
            returnKeyType="done"
            onSubmitEditing={handleSignIn}
            secureTextEntry={viewPassword ? false : true}
          />
          { viewPassword ?
            <Icon
              name="eye-off"
              size={20}
              color={colors.text}
              onPress={() => setViewPassword(!viewPassword)}
            />
            :
            <Icon
              name="eye"
              size={20}
              color={colors.text}
              onPress={() => setViewPassword(!viewPassword)}
            />
          }
        </View>
        
        <TouchableOpacity
          style={[styles.buttonLogin, { borderColor: colors.text }]}
          onPress={handleSignIn}
        >
          <Text style={{ color: colors.text }}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}