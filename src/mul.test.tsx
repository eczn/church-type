import { n8, n6, n4, n10 } from './base.test';
import { Mul } from './mul'
import { N2, N4, N1, N3, N5 } from './base';
import { Add } from './add';

type M22 = Mul<N2, N2>
type M14 = Mul<N1, N4>
type M24 = Mul<N2, N4>
type M25 = Mul<N2, N5>
type M23 = Mul<N2, N3>

type A10 = Add<M22, M23>

// @ts-ignore
export let a10: A10 = '';

// @ts-ignore
export let m22: M22 = '';
// @ts-ignore
export let m14: M14 = '';
// @ts-ignore
export let m23: M23 = '';
// @ts-ignore
export let m24: M24 = '';
// @ts-ignore
export let m25: M25 = '';

m22 = n4;
m14 = n4;
m22 = m14;

m23 = n6;



// 测试
m25 = a10 = n10;

m24 = n8;
