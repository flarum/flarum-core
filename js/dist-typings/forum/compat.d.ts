/// <reference types="mithril" />
import KeyboardNavigatable from '../common/utils/KeyboardNavigatable';
import slidable from './utils/slidable';
import History from './utils/History';
import alertEmailConfirmation from './utils/alertEmailConfirmation';
import Pane from './utils/Pane';
import ComposerState from './states/ComposerState';
import DiscussionListState from './states/DiscussionListState';
import GlobalSearchState from './states/GlobalSearchState';
import NotificationListState from './states/NotificationListState';
import PostStreamState from './states/PostStreamState';
import SearchState from './states/SearchState';
import UserSecurityPageState from './states/UserSecurityPageState';
import AffixedSidebar from './components/AffixedSidebar';
import DiscussionPage from './components/DiscussionPage';
import DiscussionListPane from './components/DiscussionListPane';
import LogInModal from './components/LogInModal';
import NewAccessTokenModal from './components/NewAccessTokenModal';
import ComposerBody from './components/ComposerBody';
import ForgotPasswordModal from './components/ForgotPasswordModal';
import Notification from './components/Notification';
import LogInButton from './components/LogInButton';
import DiscussionsUserPage from './components/DiscussionsUserPage';
import Composer from './components/Composer';
import SessionDropdown from './components/SessionDropdown';
import HeaderPrimary from './components/HeaderPrimary';
import PostEdited from './components/PostEdited';
import PostStream from './components/PostStream';
import ChangePasswordModal from './components/ChangePasswordModal';
import IndexPage from './components/IndexPage';
import DiscussionRenamedNotification from './components/DiscussionRenamedNotification';
import DiscussionsSearchSource from './components/DiscussionsSearchSource';
import HeaderSecondary from './components/HeaderSecondary';
import ComposerButton from './components/ComposerButton';
import DiscussionList from './components/DiscussionList';
import ReplyPlaceholder from './components/ReplyPlaceholder';
import AvatarEditor from './components/AvatarEditor';
import Post from './components/Post';
import SettingsPage from './components/SettingsPage';
import TerminalPost from './components/TerminalPost';
import ChangeEmailModal from './components/ChangeEmailModal';
import NotificationsDropdown from './components/NotificationsDropdown';
import UserPage from './components/UserPage';
import PostUser from './components/PostUser';
import UserCard from './components/UserCard';
import UsersSearchSource from './components/UsersSearchSource';
import UserSecurityPage from './components/UserSecurityPage';
import NotificationGrid from './components/NotificationGrid';
import PostPreview from './components/PostPreview';
import EventPost from './components/EventPost';
import DiscussionHero from './components/DiscussionHero';
import PostMeta from './components/PostMeta';
import DiscussionRenamedPost from './components/DiscussionRenamedPost';
import DiscussionComposer from './components/DiscussionComposer';
import LogInButtons from './components/LogInButtons';
import NotificationList from './components/NotificationList';
import WelcomeHero from './components/WelcomeHero';
import SignUpModal from './components/SignUpModal';
import CommentPost from './components/CommentPost';
import ComposerPostPreview from './components/ComposerPostPreview';
import ReplyComposer from './components/ReplyComposer';
import NotificationsPage from './components/NotificationsPage';
import PostStreamScrubber from './components/PostStreamScrubber';
import EditPostComposer from './components/EditPostComposer';
import RenameDiscussionModal from './components/RenameDiscussionModal';
import Search from './components/Search';
import DiscussionListItem from './components/DiscussionListItem';
import LoadingPost from './components/LoadingPost';
import PostsUserPage from './components/PostsUserPage';
import DiscussionPageResolver from './resolvers/DiscussionPageResolver';
import BasicEditorDriver from '../common/utils/BasicEditorDriver';
import routes from './routes';
import ForumApplication from './ForumApplication';
import isSafariMobile from './utils/isSafariMobile';
import AccessTokensList from './components/AccessTokensList';
import DiscussionsSearchItem from './components/DiscussionsSearchItem';
declare const _default: {
    extenders: {
        Model: typeof import("../common/extenders/Model").default;
        PostTypes: typeof import("../common/extenders/PostTypes").default;
        Routes: typeof import("../common/extenders/Routes").default;
        Store: typeof import("../common/extenders/Store").default;
    };
    extend: typeof import("../common/extend");
    Session: typeof import("../common/Session").default;
    Store: typeof import("../common/Store").default;
    'utils/BasicEditorDriver': typeof BasicEditorDriver;
    'utils/bidi': typeof import("../common/utils/bidi").default;
    'utils/evented': {
        handlers: Record<string, unknown>;
        getHandlers(event: string): Function[];
        trigger(event: string, ...args: any[]): void;
        on(event: string, handler: Function): void;
        one(event: string, handler: Function): void;
        off(event: string, handler: Function): void;
    };
    'utils/EventEmitter': typeof import("../common/utils/EventEmitter").default;
    'utils/KeyboardNavigatable': typeof KeyboardNavigatable;
    'utils/liveHumanTimes': typeof import("../common/utils/liveHumanTimes").default;
    'utils/ItemList': typeof import("../common/utils/ItemList").default;
    'utils/mixin': typeof import("../common/utils/mixin").default;
    'utils/humanTime': typeof import("../common/utils/humanTime").default;
    'utils/computed': typeof import("../common/utils/computed").default;
    'utils/insertText': typeof import("../common/utils/insertText").default;
    'utils/styleSelectedText': typeof import("../common/utils/styleSelectedText").default;
    'utils/Drawer': typeof import("../common/utils/Drawer").default;
    'utils/EditorDriverInterface': typeof import("../common/utils/EditorDriverInterface");
    'utils/anchorScroll': typeof import("../common/utils/anchorScroll").default;
    'utils/RequestError': typeof import("../common/utils/RequestError").default;
    'utils/abbreviateNumber': typeof import("../common/utils/abbreviateNumber").default;
    'utils/string': typeof import("../common/utils/string");
    'utils/SubtreeRetainer': typeof import("../common/utils/SubtreeRetainer").default;
    'utils/escapeRegExp': typeof import("../common/utils/escapeRegExp").default;
    'utils/extract': typeof import("../common/utils/extract").default;
    'utils/ScrollListener': typeof import("../common/utils/ScrollListener").default;
    'utils/stringToColor': typeof import("../common/utils/stringToColor").default;
    'utils/Stream': typeof import("mithril/stream");
    'utils/subclassOf': typeof import("../common/utils/subclassOf").default;
    'utils/setRouteWithForcedRefresh': typeof import("../common/utils/setRouteWithForcedRefresh").default;
    'utils/patchMithril': typeof import("../common/utils/patchMithril").default;
    'utils/proxifyCompat': typeof import("../common/utils/proxifyCompat").default;
    'utils/classList': typeof import("clsx").clsx;
    'utils/extractText': typeof import("../common/utils/extractText").default;
    'utils/formatNumber': typeof import("../common/utils/formatNumber").default;
    'utils/mapRoutes': typeof import("../common/utils/mapRoutes").default;
    'utils/withAttr': (key: string, cb: Function) => (this: Element) => void;
    'utils/throttleDebounce': typeof import("../common/utils/throttleDebounce");
    'utils/isObject': typeof import("../common/utils/isObject").default;
    'utils/focusTrap': typeof import("../common/utils/focusTrap");
    'utils/isDark': typeof import("../common/utils/isDark").default;
    'models/AccessToken': typeof import("../common/models/AccessToken").default;
    'models/Notification': typeof import("../common/models/Notification").default;
    'models/User': typeof import("../common/models/User").default;
    'models/Post': typeof import("../common/models/Post").default;
    'models/Discussion': typeof import("../common/models/Discussion").default;
    'models/Group': typeof import("../common/models/Group").default;
    'models/Forum': typeof import("../common/models/Forum").default;
    Component: typeof import("../common/Component").default;
    Fragment: typeof import("../common/Fragment").default;
    Translator: typeof import("../common/Translator").default;
    'components/AlertManager': typeof import("../common/components/AlertManager").default;
    'components/Page': typeof import("../common/components/Page").default;
    'components/Switch': typeof import("../common/components/Switch").default;
    'components/Badge': typeof import("../common/components/Badge").default;
    'components/LoadingIndicator': typeof import("../common/components/LoadingIndicator").default;
    'components/Placeholder': typeof import("../common/components/Placeholder").default;
    'components/Separator': typeof import("../common/components/Separator").default;
    'components/Dropdown': typeof import("../common/components/Dropdown").default;
    'components/SplitDropdown': typeof import("../common/components/SplitDropdown").default;
    'components/RequestErrorModal': typeof import("../common/components/RequestErrorModal").default;
    'components/FieldSet': typeof import("../common/components/FieldSet").default;
    'components/Select': typeof import("../common/components/Select").default;
    'components/Navigation': typeof import("../common/components/Navigation").default;
    'components/Alert': typeof import("../common/components/Alert").default;
    'components/Link': typeof import("../common/components/Link").default;
    'components/LinkButton': typeof import("../common/components/LinkButton").default;
    'components/Checkbox': typeof import("../common/components/Checkbox").default;
    'components/ColorPreviewInput': typeof import("../common/components/ColorPreviewInput").default;
    'components/ConfirmDocumentUnload': typeof import("../common/components/ConfirmDocumentUnload").default;
    'components/SelectDropdown': typeof import("../common/components/SelectDropdown").default;
    'components/ModalManager': typeof import("../common/components/ModalManager").default;
    'components/Button': typeof import("../common/components/Button").default;
    'components/Modal': typeof import("../common/components/Modal").default;
    'components/GroupBadge': typeof import("../common/components/GroupBadge").default;
    'components/TextEditor': typeof import("../common/components/TextEditor").default;
    'components/TextEditorButton': typeof import("../common/components/TextEditorButton").default;
    'components/Tooltip': typeof import("../common/components/Tooltip").default;
    'components/EditUserModal': typeof import("../common/components/EditUserModal").default;
    'components/LabelValue': typeof import("../common/components/LabelValue").default;
    Model: typeof import("../common/Model").default;
    Application: typeof import("../common/Application").default;
    'helpers/fullTime': typeof import("../common/helpers/fullTime").default;
    'helpers/avatar': typeof import("../common/helpers/avatar").default;
    'helpers/fireApplicationError': typeof import("../common/helpers/fireApplicationError").default;
    'helpers/fireDebugWarning': typeof import("../common/helpers/fireDebugWarning");
    'helpers/icon': typeof import("../common/helpers/icon").default;
    'helpers/humanTime': typeof import("../common/helpers/humanTime").default;
    'helpers/punctuateSeries': typeof import("../common/helpers/punctuateSeries").default;
    'helpers/highlight': typeof import("../common/helpers/highlight").default;
    'helpers/username': typeof import("../common/helpers/username").default;
    'helpers/userOnline': typeof import("../common/helpers/userOnline").default;
    'helpers/listItems': typeof import("../common/helpers/listItems").default;
    'helpers/textContrastClass': typeof import("../common/helpers/textContrastClass").default;
    'resolvers/DefaultResolver': typeof import("../common/resolvers/DefaultResolver").default;
    'states/PaginatedListState': typeof import("../common/states/PaginatedListState").default;
    'states/AlertManagerState': typeof import("../common/states/AlertManagerState").default;
    'states/ModalManagerState': typeof import("../common/states/ModalManagerState").default;
    'states/PageState': typeof import("../common/states/PageState").default;
} & {
    'utils/PostControls': {
        controls(post: import("../common/models/Post").default, context: import("../common/Component").default<any, any>): import("../common/utils/ItemList").default<import("mithril").Children>;
        userControls(post: import("../common/models/Post").default, context: import("../common/Component").default<any, any>): import("../common/utils/ItemList").default<import("mithril").Children>;
        moderationControls(post: import("../common/models/Post").default, context: import("../common/Component").default<any, any>): import("../common/utils/ItemList").default<import("mithril").Children>;
        destructiveControls(post: import("../common/models/Post").default, context: import("../common/Component").default<any, any>): import("../common/utils/ItemList").default<import("mithril").Children>;
        editAction(): Promise<void>;
        hideAction(): Promise<void>;
        restoreAction(): Promise<void>;
        deleteAction(context: any): Promise<void>;
    };
    'utils/KeyboardNavigatable': typeof KeyboardNavigatable;
    'utils/slidable': typeof slidable;
    'utils/History': typeof History;
    'utils/DiscussionControls': {
        controls(discussion: import("../common/models/Discussion").default, context: import("../common/Component").default<any, any>): import("../common/utils/ItemList").default<import("mithril").Children>;
        userControls(discussion: import("../common/models/Discussion").default, context: import("../common/Component").default<any, any>): import("../common/utils/ItemList").default<import("mithril").Children>;
        moderationControls(discussion: import("../common/models/Discussion").default): import("../common/utils/ItemList").default<import("mithril").Children>;
        destructiveControls(discussion: import("../common/models/Discussion").default): import("../common/utils/ItemList").default<import("mithril").Children>;
        replyAction(goToLast: boolean, forceRefresh: boolean): Promise<void>;
        hideAction(): Promise<void>;
        restoreAction(): Promise<void>;
        deleteAction(): Promise<void>;
        renameAction(): any;
    };
    'utils/alertEmailConfirmation': typeof alertEmailConfirmation;
    'utils/UserControls': {
        controls(user: import("../common/models/User").default, context: import("../common/Component").default<any, any>): import("../common/utils/ItemList").default<import("mithril").Children>;
        userControls(): import("../common/utils/ItemList").default<import("mithril").Children>;
        moderationControls(user: import("../common/models/User").default): import("../common/utils/ItemList").default<import("mithril").Children>;
        destructiveControls(user: import("../common/models/User").default): import("../common/utils/ItemList").default<import("mithril").Children>;
        deleteAction(user: import("../common/models/User").default): void;
        showDeletionAlert(user: import("../common/models/User").default, type: string): void;
        editAction(user: import("../common/models/User").default): void;
    };
    'utils/Pane': typeof Pane;
    'utils/BasicEditorDriver': typeof BasicEditorDriver;
    'utils/isSafariMobile': typeof isSafariMobile;
    'states/ComposerState': typeof ComposerState;
    'states/DiscussionListState': typeof DiscussionListState;
    'states/GlobalSearchState': typeof GlobalSearchState;
    'states/NotificationListState': typeof NotificationListState;
    'states/PostStreamState': typeof PostStreamState;
    'states/SearchState': typeof SearchState;
    'states/UserSecurityPageState': typeof UserSecurityPageState;
    'components/AffixedSidebar': typeof AffixedSidebar;
    'components/DiscussionPage': typeof DiscussionPage;
    'components/DiscussionListPane': typeof DiscussionListPane;
    'components/LogInModal': typeof LogInModal;
    'components/NewAccessTokenModal': typeof NewAccessTokenModal;
    'components/ComposerBody': typeof ComposerBody;
    'components/ForgotPasswordModal': typeof ForgotPasswordModal;
    'components/Notification': typeof Notification;
    'components/LogInButton': typeof LogInButton;
    'components/DiscussionsUserPage': typeof DiscussionsUserPage;
    'components/Composer': typeof Composer;
    'components/SessionDropdown': typeof SessionDropdown;
    'components/HeaderPrimary': typeof HeaderPrimary;
    'components/PostEdited': typeof PostEdited;
    'components/PostStream': typeof PostStream;
    'components/ChangePasswordModal': typeof ChangePasswordModal;
    'components/IndexPage': typeof IndexPage;
    'components/DiscussionRenamedNotification': typeof DiscussionRenamedNotification;
    'components/DiscussionsSearchSource': typeof DiscussionsSearchSource;
    'components/DiscussionsSearchItem': typeof DiscussionsSearchItem;
    'components/HeaderSecondary': typeof HeaderSecondary;
    'components/ComposerButton': typeof ComposerButton;
    'components/DiscussionList': typeof DiscussionList;
    'components/ReplyPlaceholder': typeof ReplyPlaceholder;
    'components/AvatarEditor': typeof AvatarEditor;
    'components/Post': typeof Post;
    'components/SettingsPage': typeof SettingsPage;
    'components/TerminalPost': typeof TerminalPost;
    'components/ChangeEmailModal': typeof ChangeEmailModal;
    'components/NotificationsDropdown': typeof NotificationsDropdown;
    'components/UserPage': typeof UserPage;
    'components/PostUser': typeof PostUser;
    'components/UserCard': typeof UserCard;
    'components/UsersSearchSource': typeof UsersSearchSource;
    'components/UserSecurityPage': typeof UserSecurityPage;
    'components/NotificationGrid': typeof NotificationGrid;
    'components/PostPreview': typeof PostPreview;
    'components/EventPost': typeof EventPost;
    'components/DiscussionHero': typeof DiscussionHero;
    'components/PostMeta': typeof PostMeta;
    'components/DiscussionRenamedPost': typeof DiscussionRenamedPost;
    'components/DiscussionComposer': typeof DiscussionComposer;
    'components/LogInButtons': typeof LogInButtons;
    'components/NotificationList': typeof NotificationList;
    'components/WelcomeHero': typeof WelcomeHero;
    'components/SignUpModal': typeof SignUpModal;
    'components/CommentPost': typeof CommentPost;
    'components/ComposerPostPreview': typeof ComposerPostPreview;
    'components/ReplyComposer': typeof ReplyComposer;
    'components/NotificationsPage': typeof NotificationsPage;
    'components/PostStreamScrubber': typeof PostStreamScrubber;
    'components/EditPostComposer': typeof EditPostComposer;
    'components/RenameDiscussionModal': typeof RenameDiscussionModal;
    'components/Search': typeof Search;
    'components/DiscussionListItem': typeof DiscussionListItem;
    'components/LoadingPost': typeof LoadingPost;
    'components/PostsUserPage': typeof PostsUserPage;
    'components/AccessTokensList': typeof AccessTokensList;
    'resolvers/DiscussionPageResolver': typeof DiscussionPageResolver;
    routes: typeof routes;
    ForumApplication: typeof ForumApplication;
};
export default _default;
