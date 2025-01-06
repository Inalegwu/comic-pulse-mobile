import { Feather } from "@expo/vector-icons";
import { type ColorProps, useTheme } from "@shopify/restyle";
import type { Theme } from "@theme";
import type React from "react";
import { memo } from "react";

type IconProps = React.ComponentProps<typeof Feather>;

type Props = Omit<Omit<IconProps, "color">, "size"> &
  ColorProps<Theme> & {
    size?: keyof Theme["spacing"];
  };

const Icon = memo(({ name, color, size }: Props) => {
  const theme = useTheme<Theme>();
  const vColor = theme.colors[color || "white"];
  const vSize = theme.spacing[size || 5];

  return <Feather name={name} color={vColor} size={vSize} />;
});

export default Icon;
