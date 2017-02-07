//@flow
import React from 'react';

export default class Late {
    static setLocale(id: string): undefined {}
    static addLocale(id: string, options: Object): Object {}
    static addStrings(id: string, strings: Object): Object {}
    static translate(key: string, values: Object): string {}
    static setUnsafeHtmlState(state: boolean): boolean {}
    static getUnsafeHtmlState(): boolean {
        return true;
    }
}

export const t = Late.translate;

export class Translate extends React.Component {
    render() {
        let key: string = this.props.key || this.props.children;
        let values: Object = this.props.values || {};
        let result = t(key, values);

        let allowHtml: boolean = this.props.html || Late.getUnsafeHtmlState();

        if (allowHtml) {
            return (
                <span dangerouslySetInnerHTML={ { __html: result } }></span>
            );
        }
        return (
            <span>{ result }</span>
        );
    }
}
