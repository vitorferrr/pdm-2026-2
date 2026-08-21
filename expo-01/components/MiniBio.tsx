import { StyleSheet, Text, View } from 'react-native';
import { Profile } from './Profile';

export function MiniBio() {
  return (
    <View style={styles.card}>
      <Profile />
      <Text style={styles.frase}>
        Desenvolvedor backend Java. Atualmente Estagiário em Desenvolvimento de Sistemas na Prefeitura Municipal de Jaboatão dos Guararapes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    gap: 20,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
  },
  frase: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: '#555555',
    maxWidth: 280,
  },
});