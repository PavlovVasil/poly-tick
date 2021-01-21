import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import { PROXY_URL, BASE_URL, JSON_QUERY_PARAM } from '../../constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css'
import PropTypes from 'prop-types';

export const DataTable = ({columns, title, resource}) => {
    const [data, setData] = useState([]);

    // fetching data from the API
    useEffect(() => {
        (async () => {        
        try {
            const response = await fetch(`${PROXY_URL}/${BASE_URL}/${resource}${JSON_QUERY_PARAM}`);
            const councillors = await response.json();
            setData(councillors);
        } catch (e) { }
    })()
    }, [])
    
    return (
        data && data.length > 0
        ? (
            <MaterialTable
                title={title}
                columns={columns}
                data={data}        
                options={{
                    filtering: true,
                    paging: false,
                    maxBodyHeight: 'calc(100vh - 128px)',
                    search: false
                }}
            />
        )
        : (
        <div className="loading-container"><CircularProgress /></div> 
        )
    )
}

DataTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    resource: PropTypes.string
}