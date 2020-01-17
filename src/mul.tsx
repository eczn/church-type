import { N0, NN, Zero } from './base';
import { Add } from './add';
import { SubOne } from './sub';

export type Mul<A extends NN, B, S = Zero> = B extends N0 ? S : {
    // 因为前面套了层 pre，因此这里要减 1
    pre: SubOne<
        Mul<A, SubOne<B>, Add<A, S> >
    >
}



