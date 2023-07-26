import { useEffect } from 'react';

let listenerCallbacks = new WeakMap();

let observer: IntersectionObserver | undefined;

type isInViewSetterCallback = () => void;

function handleIntersections(entries:any) {
    entries.forEach((entry:any) => {
        if (listenerCallbacks.has(entry.target)) {
            let cb = listenerCallbacks.get(entry.target);

            if (entry.isIntersecting || entry.intersectionRatio > 0) {
                observer!!.unobserve(entry.target);
                listenerCallbacks.delete(entry.target);
                cb();
            }
        }
    });
}

function getIntersectionObserver() {
    if (observer === undefined) {
        observer = new IntersectionObserver(handleIntersections, {
            rootMargin: '100px',
            threshold: 0.15
        });
    }
    return observer;
}

export function useIntersection(elem: any, callback: isInViewSetterCallback) {
    useEffect(() => {
        let target = elem.current;
        let observer = getIntersectionObserver();
        //@ts-ignore
        listenerCallbacks.set(target, callback);
        // @ts-ignore
        observer.observe(target);

        return () => {
            // @ts-ignore
            listenerCallbacks.delete(target);
            // @ts-ignore
            observer.unobserve(target);
        };
    }, []);
}