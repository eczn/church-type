import { NN, N0 } from './base'

/**
 * ## 递归地定义加法
 */
export type Add<A extends NN, B> = B extends N0 ? A : {
    pre: B extends { pre: infer P } ? Add<A, P> : Add<N0, A>
}
