import { n1 } from './base.test';
import { N2, N3 } from './base';
import { SubOne, SubTwo } from './sub';

type S1 = SubOne<N2>;
type S1_ = SubTwo<N3>;

// @ts-ignore
export let s1: S1 = ''
// @ts-ignore
export let s1_: S1_ = '';

// 测试自减逻辑
s1  = n1;
s1_ = n1;

