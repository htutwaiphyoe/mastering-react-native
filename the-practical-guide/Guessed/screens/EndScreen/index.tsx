import {styles} from './style';
import {useGameContext} from '@/providers';
import {globalStyles} from '@/styles/global';
import {Title, Button, Card} from '@/components';
import {ScrollView, Text, View} from 'react-native';

export function EndScreen() {
  const {goToStartScreen, guess, rounds} = useGameContext();

  return (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.screen}>
        <Title>Game Over</Title>
        <Card title="Congratulations!">
          <Title>
            You needed <Text style={styles.text}>{rounds.length}</Text> times to
            guess the number <Text style={styles.text}>{+guess}</Text>!
          </Title>
          <View>
            <Button onPress={goToStartScreen}>Play again</Button>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}
