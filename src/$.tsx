
export type $<T extends Array<any>> = (...xs: T) => void

export type $x<Lst> = (
    Lst extends ((...xs: infer XS) => void) ?
        // X extends unknown ? null : X
        XS extends [] ? null : XS[0]
        :
        null
)

export type $xs<Lst> = (
    Lst extends ((x: any, ...xs: infer XS) => void) ?
        $<XS> :
        $<[]>
)
