import React from 'react';
import { DataTable } from '../../components';
import { COUNCILLORS } from '../../constants';

const columns = [
    { title: "Id", field: 'id', type: 'numeric'},
    { title: 'Canton', field: 'cantonName', filtering: false, sorting: false },
    { title: 'Council', field: 'council', filtering: false, sorting: false },
    { title: 'Faction', field: 'factionName', filtering: false, sorting: false },
    { title: 'First Name', field: 'firstName', },
    { title: 'Last Name', field: 'lastName' },
    { title: 'Canton', field: 'cantonName', filtering: false, sorting: false },
    { title: 'Number', field: 'number', filtering: false, sorting: false },
    { title: 'Party', field: 'partyName', filtering: false, sorting: false },
]

export const Councillors = () => <DataTable columns={columns} title="Councillors" resource={COUNCILLORS}/>
