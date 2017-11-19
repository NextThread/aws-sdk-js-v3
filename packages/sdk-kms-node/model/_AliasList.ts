import {List as _List_} from '@aws/types';
import {_AliasListEntry} from './_AliasListEntry';

export const _AliasList: _List_ = {
    type: 'list',
    member: {
        shape: _AliasListEntry,
    },
};