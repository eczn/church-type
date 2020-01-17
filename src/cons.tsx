import { NN, N2, N3, N4, AddOne } from './base'

import { Add } from './add'

import { $, $x, $xs } from './$';

export type Cons<L, R> = [L, R];

export type Car<P> = P extends Cons<infer L, any> ? L : null;

export type Cdr<P> = P extends Cons<any, infer R> ? R : null;

export type _MakeList<xxs> = $x<xxs> extends null ? null : (
    [$x<xxs>, _MakeList<$xs<xxs>> ]
)

export type MakeList<xxs extends Array<any>> = _MakeList<$<xxs>>

export type Apply<T, A> = T extends (x: A) => infer Y ? Y : never;

type g = MakeList<[N2, N3, N4]>


export type Map<Lst> = Car<Lst> extends null ? null : (
    [
        Car<Lst>,
        Map<Cdr<Lst>>
    ]
)

// i need first class types
