import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import { PROXY_URL, BASE_URL, COUNCILLORS, JSON_QUERY_PARAM } from '../../constants';
import PropTypes from 'prop-types';

export const DataTable = () => {
    const [data, setData] = useState([]);

    // fetching data from the API
    useEffect(() => {
        (async () => {        
        try {
            const response = await fetch(`${PROXY_URL}/${BASE_URL}/${COUNCILLORS}${JSON_QUERY_PARAM}`);
            const councillors = await response.json();
            setData(councillors);
        } catch (e) { }
    })()
    }, [])
    
    return (
        data && data.length > 0 &&
        <MaterialTable
            title="Councillors"
            columns={[
                { title: "Id", field: 'id', type: 'numeric'},
                { title: 'Canton', field: 'cantonName', filtering: false },
                { title: 'Council', field: 'council', filtering: false },
                { title: 'Faction', field: 'factionName', filtering: false },
                { title: 'First Name', field: 'firstName', },
                { title: 'Last Name', field: 'lastName' },
                { title: 'Canton', field: 'cantonName', filtering: false },
                { title: 'Number', field: 'number', filtering: false },
                { title: 'Party', field: 'partyName', filtering: false },
            ]}
            data={data}        
            options={{
                filtering: true,
                paging: false,
                maxBodyHeight: 'calc(100vh - 64px)',
                search: false
            }}
        />
    )
}