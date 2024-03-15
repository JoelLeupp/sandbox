/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Status } from "./components/signal/signal";
export { Status } from "./components/signal/signal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MySignal {
        /**
          * status of the signal
         */
        "status": Status;
    }
}
export interface MySignalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMySignalElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMySignalElementEventMap {
        "statusUpdated": any;
    }
    interface HTMLMySignalElement extends Components.MySignal, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMySignalElementEventMap>(type: K, listener: (this: HTMLMySignalElement, ev: MySignalCustomEvent<HTMLMySignalElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMySignalElementEventMap>(type: K, listener: (this: HTMLMySignalElement, ev: MySignalCustomEvent<HTMLMySignalElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMySignalElement: {
        prototype: HTMLMySignalElement;
        new (): HTMLMySignalElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-signal": HTMLMySignalElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MySignal {
        "onStatusUpdated"?: (event: MySignalCustomEvent<any>) => void;
        /**
          * status of the signal
         */
        "status"?: Status;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-signal": MySignal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-signal": LocalJSX.MySignal & JSXBase.HTMLAttributes<HTMLMySignalElement>;
        }
    }
}
