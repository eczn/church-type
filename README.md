# TypeScript & Church Encoding

TypeScript + Church = Church Type Num

# Church 自然数 = Church 0 + Church 正整数

下面是 0 的定义

``` ts
export type Zero = { pre: null };
```

根据 Church 的定义，可以写出下面的自然数定义：

``` ts
// 定义自然数 0 1 2 3 4 ....
export type NN = { pre: null | NN }
```

显然，从 k 到 k + 1 的 church 递推为：

``` ts
// 定义 k 和 k+1 的关系
export type AddOne<T> = {
    pre: T
}
```

# 加法 Add

见 ./src/add.tsx

# 减法 Sub

见 ./src/sub.tsx

# 乘法 Mul

见 ./src/mul.tsx

# 求余 Remainder

见 ./src/remainder.tsx

注: TS 的递归是有深度的，因此求余的 Church Type 比较大的时候类型会失效

# 有效性测试

``` bash
$ npm run tsc
```

相关类型测试请见 ./src/*.test.tsx

# License 

MIT
