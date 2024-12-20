import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackIconSvg from '../../assets/icons/user/back-icon-svg';
import {Profile} from '../../assets/images';
import {Row} from '../../components/atoms/row';
import {colors} from '../../config/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomDrawerContent = props => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.drawerContainer}>
      <View
        style={{
          paddingTop: Platform.OS === 'ios' ? insets.top : 0,
          backgroundColor: colors.primary,
        }}
      />
      <Row style={styles.profileContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <BackIconSvg />
        </TouchableOpacity>
        <Image source={Profile} style={styles.profileImage} />
        <Text style={styles.userName}>{'Sadruddin'}</Text>
      </Row>
      <View style={styles.menuContainer}>
        <DrawerItem
          icon="person-outline"
          label="Edit Profile"
          onPress={() => props.navigation.navigate('CandidateEditProfile')}
        />
        <DrawerItem
          icon="calendar-outline"
          label="Practice Interview"
          onPress={() => props.navigation.navigate('CandidateDashboard')}
        />
        <DrawerItem
          icon="briefcase-outline"
          label="Job Board"
          onPress={() => props.navigation.navigate('CandidateJobBoard')}
        />
        <DrawerItem
          icon="bar-chart-outline"
          label="Feedback and Reports"
          onPress={() => props.navigation.navigate('FeedbackReportCandidate')}
        />
        <DrawerItem
          icon="notifications-outline"
          label="Notifications"
          // onPress={() => props.navigation.navigate('Notifications')}
        />
        <DrawerItem
          icon="help-circle-outline"
          label="Support"
          // onPress={() => props.navigation.navigate('Support')}
        />
      </View>
    </View>
  );
};

const DrawerItem = ({icon, label, onPress}) => (
  <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
    <Ionicons name={icon} size={20} color="#000" />
    <Text style={styles.drawerItemText}>{label}</Text>
  </TouchableOpacity>
);
export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  profileContainer: {
    // padding: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'flex-start',
    gap: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    gap: 10,
  },
  userName: {
    fontSize: 14,
    color: colors.white,
  },
  menuContainer: {
    paddingVertical: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  drawerItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
