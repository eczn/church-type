import { $, $x, $xs } from './$';

export namespace __$TEST {
    // create lst [1 2 3 4]
    export type lst = $<[1, 2, 3, 4]>
    // Test [1 2 3 4]
    export type _1 = $x<lst>
    export const TEST_1: _1 = 1;
   
    // create lst [2 3 4] from [1 2 3 4]
    export type $234 = $xs<lst>
    // Test [2 3 4]
    export type _2 = $x<$234>
    export const TEST_2: _2 = 2;
    
    // create lst [3 4] from [2 3 4]
    export type $34 = $xs<$234>
    // Test [3 4]
    export type _3 = $x<$34>
    export const TEST_3: _3 = 3;
    
    // create lst [4] from [3 4]
    export type $4 = $xs<$34>
    // Test [4]
    export type _4 = $x<$4>
    export const TEST_4: _4 = 4;
    
    // create lst [] from [4]
    export type $_ = $xs<_4>
    // Test []
    export type nothing = $x<$_>
    export const TEST_nothing = null;

    // test rest from []
    export type $__ = $xs<$_>;
    const $$$: $_ = () => {};
    export const GGG: $__ = $$$
}


