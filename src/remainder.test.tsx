import { n0, n1, n2 } from './base.test';
import { N0, N1, N2, N3, N4, N5, N6, N7, N8, N9 } from './base';
import { Remainder } from './remainder';

type R0 = Remainder<N0>
type R1 = Remainder<N1>
type R2 = Remainder<N2>
type R3 = Remainder<N3>
type R4 = Remainder<N4>
type R5 = Remainder<N5>
type R6 = Remainder<N6>
type R7 = Remainder<N7>

// @ts-ignore
export let r0: R0 = '';
// @ts-ignore
export let r1: R1 = '';
// @ts-ignore
export let r2: R2 = '';
// @ts-ignore
export let r3: R3 = '';
// @ts-ignore
export let r4: R4 = '';
// @ts-ignore
export let r5: R5 = '';
// @ts-ignore
export let r6: R6 = '';
// @ts-ignore
export let r7: R7 = '';

r0 = n0;
r1 = n1;

r2 = n0;
r3 = n1;

r4 = n0;
r5 = n1;

r6 = n0;
r7 = n1;
