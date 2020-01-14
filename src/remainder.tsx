import { N0, N1 } from "./base";
import { SubOne, SubTwo } from "./sub";

/**
 * ## 定义 % 2 操作
 * 这个很重要 ~
 */
export type Remainder<A> = {
    pre: SubOne<
        A extends N0 ? N0 : (
            A extends N1 ? N1 : (
                Remainder<SubTwo<A>>
            )
        )
    >
}
