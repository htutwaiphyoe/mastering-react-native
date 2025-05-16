import {styles} from './styles';
import {ScrollView, View} from 'react-native';

type MasonryProps<T> = {
  data: T[];
  cols: number;
  renderItem: (item: {item: T; i: number}) => React.ReactNode;
  renderEmpty?: () => React.ReactNode;
};

export function Masonry<T>({
  cols,
  data,
  renderItem,
  renderEmpty,
}: MasonryProps<T>) {
  if (data.length === 0) {
    return renderEmpty?.();
  }

  return (
    <ScrollView
      style={styles.masonryContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.masonry}>
        {Array.from(Array(cols), (_, num) => {
          return (
            <View
              key={`masonry-column-${num}`}
              style={[styles.masonryColumn, {flex: 1 / cols}]}>
              {data.map((item, i) =>
                i % cols === num ? renderItem({item, i}) : null,
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
