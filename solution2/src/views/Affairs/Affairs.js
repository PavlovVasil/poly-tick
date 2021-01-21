import React from 'react';
import { DataTable } from '../../components';
import { AFFAIRS } from '../../constants'

const columns = [
    { title: 'Id', field: 'id', filtering: false, sorting: false },
    { title: 'Updated', field: 'updated'}
]

export const Affairs = () => <DataTable columns={columns} title="Affairs" resource={AFFAIRS}/> 