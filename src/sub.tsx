/**
 * ## 定义减 1
 * 如果减出未定义的东西，则返回 never
 */
export type SubOne<T> = T extends ({ pre: infer P }) ? P : never;

/**
 * ## 定义减 2
 */
export type SubTwo<T> = SubOne<SubOne<T>>
