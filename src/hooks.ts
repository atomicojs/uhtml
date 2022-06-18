import { Ref, useHost, useMemo } from "atomico";
import { render } from "uhtml";

export function useRender(callback: () => any, args?: any[]) {
    const host = useHost();

    useMemo(() => {
        render(host.current, callback());
    }, args);
}
