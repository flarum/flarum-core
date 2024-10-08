import { SearchSource } from './Search';
import type Mithril from 'mithril';
import Discussion from '../../common/models/Discussion';
/**
 * The `DiscussionsSearchSource` finds and displays discussion search results in
 * the search dropdown.
 */
export default class DiscussionsSearchSource implements SearchSource {
    protected results: Map<string, Discussion[]>;
    queryString: string | null;
    search(query: string): Promise<void>;
    view(query: string): Array<Mithril.Vnode>;
    includes(): string[];
    limit(): number;
    queryMutators(): string[];
    setQueryString(query: string): void;
}
