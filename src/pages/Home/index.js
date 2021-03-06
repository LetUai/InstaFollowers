import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

import TopTabs from '../../routes/TopTabs';
import styles from './styles';

export default function Home({ navigation }) {

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>username</Text>
        <Icon
          name="menu"
          color={ colors.text }
          size={28}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </View>
      <View style={styles.profile}>
        <Image
          style={styles.imageProfile}
          source={{ uri: 'https://images.unsplash.com/photo-1551392505-f4056032826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=597&q=80' }}
        />
        <View style={styles.profileInfo}>
          <Text style={[styles.nameProfile, { color: colors.text }]}>Name</Text>
          <Text style={[styles.description], { color: colors.text }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eos magni, quos placeat nesciunt ipsam officia inventore autem</Text>
        </View>
      </View>

      <TopTabs />
    </View>
  );
}