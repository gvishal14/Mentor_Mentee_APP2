import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Terms = () => {
  return (
    <ScrollView>
      <View style={styles.container1}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            color: '#313131',
            marginLeft: 10,
          }}>
          Terms & Conditions
        </Text>
        <Image
          source={require('../../assets/dashboard/Notification.png')}
          style={styles.image3}
        />
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 16, color: '#313131'}}>1. Introduction</Text>
        <Text style={{fontSize: 14, color: '#313131'}}>
          This document outlines the terms and conditions of using Pxalm. By
          signing up as a mentor or mentee, you are agreeing to abide by these
          terms and conditions.
        </Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 16, color: '#313131'}}>
          2. Mentorship Services
        </Text>
        <Text style={{fontSize: 14, color: '#313131'}}>
          Pxalm provides a platform for individuals to connect with mentors and
          mentees for the purpose of personal and professional growth. Mentors
          and mentees can participate in both 1-on-1 and group mentorship
          sessions.
        </Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 16, color: '#313131'}}>3. Commission</Text>
        <Text style={{fontSize: 14, color: '#313131'}}>
          The Mentorship App will take 25% of the earnings paid by mentees to
          mentors. This amount may be reduced through incentives such as posting
          a video ad on social media or referring new mentors or mentees to the
          app.
        </Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 16, color: '#313131'}}>
          4. Mentorship Session Tracking
        </Text>
        <Text style={{fontSize: 14, color: '#313131'}}>
          Mentorship sessions can be tracked both online and offline. The app
          will monitor and verify the start and end time of each session to
          ensure the integrity of the mentorship program.
        </Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 16, color: '#313131'}}>
          5. Identification and Certifications
        </Text>
        <Text style={{fontSize: 14, color: '#313131'}}>
          All users of the app must upload a government-issued ID card for
          verification purposes. Mentors may also upload a document
          demonstrating their skills and expertise in their mentorship program.
          Mentees will be able to see a certified badge above programs created
          by mentors who have uploaded a skill certificate.
        </Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 16, color: '#313131'}}>
          6. Payments and Dispute Resolution
        </Text>
        <Text style={{fontSize: 14, color: '#313131'}}>
          Payments from mentees will be held in an escrow account until the
          start of the first session and then released to the mentor. In the
          event of a dispute, evidence must be provided and reviewed before
          resolution can be reached.
        </Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 16, color: '#313131'}}>
          7. Cancellation Policy
        </Text>
        <Text style={{fontSize: 14, color: '#313131'}}>
          Mentors are allowed to have a minimum of 85% cancellation rate before
          they can cancel mentorship sessions. When mentees and mentors have met
          during an offline mentorship session, the app must be notified.
        </Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 16, color: '#313131'}}>
          8. Offline Mentorship Session Safety
        </Text>
        <Text style={{fontSize: 14, color: '#313131'}}>
          Mentees are encouraged to share their offline mentorship location and
          ID with a trusted friend. In the case of an emergency, mentees can
          dial the emergency number during an offline mentorship session.
        </Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 16, color: '#313131'}}>
          9. Mentor Availability
        </Text>
        <Text style={{fontSize: 14, color: '#313131'}}>
          Mentors will indicate their availability for after-session support on
          the app. The exact location for offline mentorship sessions will only
          be revealed to mentees who have paid for the mentorship program.
        </Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 16, color: '#313131'}}>
          10. Prohibited Conduct
        </Text>
        <Text style={{fontSize: 14, color: '#313131'}}>
          Pxalm does not tolerate fraud, foul language, or any other
          inappropriate behavior. Any user who violates these terms and
          conditions may be subject to immediate suspension or termination of
          their account.
        </Text>
      </View>

      <View style={{marginTop: 10, marginLeft: 10, marginRight: 40}}>
        <Text style={{fontSize: 14, color: '#313131'}}>
          By signing up to use Pxalm, you agree to abide by these terms and
          conditions. Pxalm reserves the right to update and modify these terms
          and conditions at any time without notice.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 130,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
