import { N0, N1, N2, N3, N4, N5, N6, N7, N8, N9, NA, AddOne } from './base';


export let n0: N0 = {
    pre: null
}

export let n1: N1 = {
    pre: {
        pre: null
    }
}

// @ts-ignore
export let n1_test: AddOne<N0> = '';

// 测试 AddOne 的递推关系
n1 = n1_test;


// @ts-ignore
export let n2: N2 = '';
// @ts-ignore
export let n3: N3 = '';
// @ts-ignore
export let n4: N4 = '';
// @ts-ignore
export let n5: N5 = '';
// @ts-ignore
export let n6: N6 = '';
// @ts-ignore
export let n7: N7 = '';
// @ts-ignore
export let n8: N8 = '';
// @ts-ignore
export let n9: N9 = '';
// @ts-ignore
export let n10: NA = '';
