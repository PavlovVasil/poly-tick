import React from 'react';
import { DataTable } from '../../components';
import { COUNCILS } from '../../constants'

const columns = [
    { title: 'Name', field: 'name', },
    { title: 'Abbreviation', field: 'abbreviation', filtering: false, sorting: false },
    { title: 'Type', field: 'type', filtering: false, sorting: false }
]

export const Councils = () => <DataTable columns={columns} title="Councils" resource={COUNCILS}/> 