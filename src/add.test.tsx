import { N0, N1, N2, N3 } from './base';
import { n5, n0, n1, n2 } from './base.test';
import { Add } from './add';

type A00 = Add<N0, N0>
type A10 = Add<N1, N0>
type A01 = Add<N0, N1>
type A11 = Add<N1, N1>

type A23 = Add<N2, N3>;


// @ts-ignore
export let a23: A23 = '';

// 测试 A23 === N5
a23 = n5;


// @ts-ignore
export let a00: A00 = '';
// @ts-ignore
export let a10: A10 = '';
// @ts-ignore
export let a01: A01 = '';
// @ts-ignore
export let a11: A11 = '';

// 测试加法
a00 = n0;
a10 = n1;
a01 = n1;
a11 = n2;
