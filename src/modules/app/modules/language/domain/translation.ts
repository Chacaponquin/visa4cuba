export type TranslationConfig<V> = { es: V; en: V; it: V };

export type Translation<T, V> = {
  [key in keyof T]: V;
};

export type TranslationInput<T, V> = {
  [key in keyof T]: TranslationConfig<V>;
};
