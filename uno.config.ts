import { defineConfig, presetUno, presetAttributify } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefixedOnly: true,
    }),
  ],
  warn: true,
  theme: {
    colors: {
      "default-color": "#232D47",
    },
  },
  // @ts-ignore
  transformers: [transformerVariantGroup()],
});
