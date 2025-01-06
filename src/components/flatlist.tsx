import {
  type BackgroundColorProps,
  type BackgroundColorShorthandProps,
  type BorderProps,
  type LayoutProps,
  type SpacingProps,
  type SpacingShorthandProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  spacing,
  useRestyle,
} from "@shopify/restyle";
import type { Theme } from "@theme";
import { type FlatListProps, FlatList as NativeFlatList } from "react-native";

type RestyleProps = LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorShorthandProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  spacing,
]);

type Props<T> = FlatListProps<T> &
  RestyleProps & {
    withEmpty?: boolean;
  };

const FlatList = <T extends Record<string, unknown>>({
  data,
  renderItem,
  withEmpty = true,
  ...rest
}: Props<T>) => {
  const props = useRestyle(restyleFunctions, rest);

  return <NativeFlatList data={data} renderItem={renderItem} {...props} />;
};

export default FlatList;
