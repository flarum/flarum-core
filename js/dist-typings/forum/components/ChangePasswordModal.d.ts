import FormModal, { IFormModalAttrs } from '../../common/components/FormModal';
import Mithril from 'mithril';
import ItemList from '../../common/utils/ItemList';
/**
 * The `ChangePasswordModal` component shows a modal dialog which allows the
 * user to send themself a password reset email.
 */
export default class ChangePasswordModal<CustomAttrs extends IFormModalAttrs = IFormModalAttrs> extends FormModal<CustomAttrs> {
    className(): string;
    title(): string | any[];
    content(): JSX.Element;
    fields(): ItemList<Mithril.Children>;
    onsubmit(e: SubmitEvent): void;
    requestBody(): {
        email: string | undefined;
    };
}
