# TypeScript & Church Encoding

TypeScript + Church = Church Type Num

# 自然数和 Church Encoding

下面是 0 的定义

``` ts
export type Zero = { pre: null };
```

现定义从 k 到 k + 1 的 Church 递推：

``` ts
// 定义 k 和 k+1 的关系
export type AddOne<T> = {
    pre: T
}
```

显然，根据上述递推，可以得到 Church 自然数的定义：

``` ts
// 定义自然数 0 1 2 3 4 ....
export type NN = { pre: null | NN }
```

# 加法 Add

见 [./src/add.tsx](./src/add.tsx)

# 减法 Sub

见 [./src/sub.tsx](./src/sub.tsx)

# 乘法 Mul

见 [./src/mul.tsx](./src/mul.tsx)

# 求余 Remainder

见 [./src/remainder.tsx](./src/remainder.tsx)


# 有效性测试

``` bash
$ npm run tsc
```

相关类型测试请见 [./src/*.test.tsx](./src/*.test.tsx)

注: TS 的递归是有深度的，因此求余的 Church Type 比较大的时候类型会失效

# License 

MIT
