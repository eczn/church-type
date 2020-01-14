import { NN } from "./base";
import { Add } from "./add";

/**
 * 定义双倍的快乐
 */
export type Double<A extends NN> = Add<A, A>;
