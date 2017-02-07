export default class Late {
    static setLocale(id: string) {}
    static addLocale(id: string, options: Object) {}
    static addStrings(id: string, strings: Object) {}
    static translate(key: string, values: Object) {}
    static setUnsafeHtmlState(state: boolean) {}
    static getUnsafeHtmlState(): boolean {}
}

let t = Late.translate;
export t;

export class Translate extends React.Component {
    render() {
        let key = this.props.key || this.props.children;
        let values = this.props.values || {};
        let result = t(key, values);

        let allowHtml = this.props.html || Late.getUnsafeHtmlState();

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
