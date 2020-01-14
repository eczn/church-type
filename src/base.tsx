// 定义自然数 0 1 2 3 4 ....
export type NN = { pre: null | NN }

// 定义 0
export type Zero = { pre: null };

// 定义 k 和 k+1 的关系
export type AddOne<T> = {
    pre: T
}

export type N0 = Zero          // 定义 0
export type N1 = AddOne<N0>    // 定义 1
export type N2 = AddOne<N1>    // 定义 2
export type N3 = AddOne<N2>    // 定义 3
export type N4 = AddOne<N3>    // 定义 4
export type N5 = AddOne<N4>    // 定义 5
export type N6 = AddOne<N5>    // 定义 6
export type N7 = AddOne<N6>    // 定义 7
export type N8 = AddOne<N7>    // 定义 8
export type N9 = AddOne<N8>    // 定义 9
export type NA = AddOne<N9>    // 定义 10
