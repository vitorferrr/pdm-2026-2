import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/fotoperfil.png')}
        style={styles.foto}
        contentFit="cover"
        transition={200}
      />
      <Text style={styles.nome}>Vitor Ferreira</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 12,
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#E5E5E5',
  },
  nome: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111111',
    letterSpacing: 0.2,
  },
});