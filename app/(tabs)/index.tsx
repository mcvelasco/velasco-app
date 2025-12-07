import { Image } from 'expo-image';
import { Platform, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const handleLearnMore = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4FD1C5', dark: '#2C7A7B' }}
      headerImage={
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2574&auto=format&fit=crop' }}
          style={styles.headerImage}
          contentFit="cover"
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.mainTitle}>HELLO PHILIPPINES!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedText style={styles.tagline}>
        Discover the Pearl of the Orient Seas. 🌴☀️
      </ThemedText>

      {/* Destination 1: Palawan */}
      <View style={[styles.card, { backgroundColor: '#E6FFFA' }]}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2639&auto=format&fit=crop' }} 
          style={styles.cardImage} 
        />
        <View style={styles.cardContent}>
          <ThemedText type="subtitle" style={styles.cardTitle}>El Nido, Palawan</ThemedText>
          <ThemedText style={styles.cardDescription}>
            Famous for its white-sand beaches, coral reefs, and limestone cliffs. It is often cited as the most beautiful island in the world.
          </ThemedText>
          <TouchableOpacity style={styles.button} onPress={() => alert('Book Flight to Palawan!')}>
            <ThemedText style={styles.buttonText}>Explore Palawan</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Destination 2: Chocolate Hills */}
      <View style={[styles.card, { backgroundColor: '#F0FFF4' }]}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1541426189547-920f04c64366?q=80&w=2670&auto=format&fit=crop' }} 
          style={styles.cardImage} 
        />
        <View style={styles.cardContent}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Chocolate Hills, Bohol</ThemedText>
          <ThemedText style={styles.cardDescription}>
            There are at least 1,260 hills but there may be as many as 1,776 hills spread over an area of more than 50 square kilometers.
          </ThemedText>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#38A169' }]} onPress={() => alert('Visit Bohol!')}>
            <ThemedText style={styles.buttonText}>See the Hills</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Destination 3: Mayon Volcano */}
      <View style={[styles.card, { backgroundColor: '#FFFAF0' }]}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1605417382218-d73138b16326?q=80&w=2671&auto=format&fit=crop' }} 
          style={styles.cardImage} 
        />
        <View style={styles.cardContent}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Mayon Volcano, Albay</ThemedText>
          <ThemedText style={styles.cardDescription}>
            Renowned for its "perfect cone" because of its symmetric conical shape, the volcano and its surrounding landscape were declared a national park.
          </ThemedText>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#DD6B20' }]} onPress={() => alert('Go to Albay!')}>
            <ThemedText style={styles.buttonText}>Climb Mayon</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      <ThemedView style={styles.footer}>
        <ThemedText style={styles.footerText}>Ready for your adventure?</ThemedText>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 10,
    marginBottom: 5,
  },
  mainTitle: {
    color: '#319795', // Teal color
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  tagline: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#718096',
  },
  card: {
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Android shadow
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 22,
    marginBottom: 8,
    color: '#2D3748',
  },
  cardDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4A5568',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#319795',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: '#A0AEC0',
  },
});