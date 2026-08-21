import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import { MiniBio } from '../components/MiniBio';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </Text>
      <MiniBio />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    paddingHorizontal: 24,
    backgroundColor: '#FAFAFA',
  },
  titulo: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    color: '#222222',
    maxWidth: 300,
  },
});