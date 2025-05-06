import React, { useState, useRef } from 'react';
import { Linking, View, Text, StyleSheet, Image, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const teknologi = require('../assets/teknologi.jpg');
const desain = require('../assets/desain.png');
const coding = require('../assets/coding.png');

export default function AboutScreen() {
  const [expanded, setExpanded] = useState(null);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpand = (card) => {
    if (expanded === card) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => setExpanded(null));
    } else {
      setExpanded(card);
      Animated.timing(animation, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Abuot Mee..</Text>
        <Text style={styles.description}>
                Saya adalah seorang pengembang digital yang percaya bahwa teknologi bukan hanya alat,
                tetapi jembatan menuju kreativitas dan solusi nyata dalam kehidupan sehari-hari.{'\n\n'}
                Dengan latar belakang di bidang desain kreatif dan pengembangan perangkat lunak,
                saya memadukan estetika, fungsi, dan inovasi dalam setiap proyek yang saya kerjakan.{'\n\n'}
                Aplikasi ini hadir sebagai refleksi dari filosofi tersebut—untuk membantu Anda mengekspresikan ide,
                mengelola tugas secara efisien, dan meningkatkan produktivitas dengan pendekatan yang personal dan intuitif.{'\n\n'}
                Setiap orang memiliki cara berpikir dan bertindak yang unik, dan saya percaya bahwa solusi digital
                yang baik adalah yang mampu menyesuaikan diri dengan kebutuhan penggunanya, bukan sebaliknya.
        </Text>


        {[
          {
            id: 1,
            image: teknologi,
            title: 'Teknologi & Inovasi',
            description: 'Mengembangkan solusi digital untuk meningkatkan efisiensi dan kreativitas.',
            detail: 'Teknologi dan inovasi telah menjadi dua elemen kunci dalam membentuk dunia modern...'
          },
          {
            id: 2,
            image: desain,
            title: 'Desain Kreatif',
            description: 'Memadukan konsep estetika dan fungsionalitas untuk UI yang menarik.',
            detail: 'Desain kreatif bukan sekadar seni visual; ia adalah perpaduan antara inovasi...'
          },
          {
            id: 3,
            image: coding,
            title: 'Pengembangan Perangkat Lunak',
            description: 'Membangun aplikasi dengan arsitektur yang bersih dan scalable.',
            detail: 'Pengembangan perangkat lunak adalah aspek fundamental dari dunia modern...'
          }
        ].map((card) => (
          <View key={card.id} style={styles.card}>
            <TouchableOpacity style={styles.cardHeader} onPress={() => toggleExpand(card.id)}>
              <Image source={card.image} style={styles.image} />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardDescription}>{card.description}</Text>
              </View>
            </TouchableOpacity>

            {expanded === card.id && (
              <Animated.View style={[styles.expandedContent, { height: animation }]}>
                <Text style={styles.expandedText}>{card.detail}</Text>
              </Animated.View>
            )}
          </View>
        ))}

        {/* Footer Section */}
        <View style={styles.footer}>
          <View style={styles.leftSection}>
            <Text style={styles.footerTitle}>Kontak Kami</Text>
            <View style={styles.contactItem}>
              <Image source={require('../assets/location.png')} style={styles.icon} />
              <Text style={styles.footerText}>01 Banyuwangi, Indonesia</Text>
            </View>
            <View style={styles.contactItem}>
              <Image source={require('../assets/phone.png')} style={styles.icon} />
              <Text style={styles.footerText}>+628 8233 897 5768</Text>
            </View>
            <View style={styles.contactItem}>
              <Image source={require('../assets/email.png')} style={styles.icon} />
              <Text style={styles.footerText}>danzzkecee@company.com</Text>
            </View>
          </View>

          <View style={styles.rightSection}>
            <Text style={styles.footerTitle}>Tentang sayaa</Text>
            <Text style={styles.footerText}>
             Teknologi yang berfokus pada pengembangan digital
              dan inovasi untuk meningkatkan efisiensi serta produktivitas.
            </Text>
            <View style={styles.socialIcons}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/oktvianrmdhni_/')}>
                <Image source={require('../assets/instagram.png')} style={styles.socialIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/OKTAVIANRAMADANI')}>
                <Image source={require('../assets/github.png')} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 40,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#C0C0C0',
    lineHeight: 24,
    fontFamily: 'sans-serif',
    width: '80%',
    marginBottom: 30,
  },
  card: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#ffffff22',
    overflow: 'hidden',
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardDescription: {
    fontSize: 16,
    color: '#C0C0C0',
  },
  expandedContent: {
    padding: 15,
    backgroundColor: '#ffffff22',
    overflow: 'hidden',
  },
  expandedText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    padding: 20,
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 30, // Jarak dari atas (card terakhir)
  },  
  leftSection: {
    width: '45%',
    alignItems: 'flex-start',
  },
  rightSection: {
    width: '50%',
    alignItems: 'flex-start',
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  footerText: {
    fontSize: 16,
    color: '#C0C0C0',
    textAlign: 'left',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 15,
  },
  socialIcon: {
    width: 32,
    height: 32,
    marginHorizontal: 8,
  },
});
