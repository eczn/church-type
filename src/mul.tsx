import { N0, NN, Zero } from './base';
import { Add } from './add';
import { SubOne } from './sub';

export type Mul<A extends NN, B, S = Zero> = B extends N0 ? S : {
    pre: SubOne<
        Mul<A, SubOne<B>, Add<A, S> >
    >
}



