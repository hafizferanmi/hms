import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialTable from 'material-table'

const useStyles = makeStyles({
  tableWrapper: {
    maxWidth: '100%',
    marginTop: 20,
    boxShadow: 'none',
    padding: 20,
    background: 'white'
  }
})

const tableStyle = {
  boxShadow: 'none'
}

const columns = [
  { title: 'Name', field: 'name', defaultSort: 'asc' },
  { title: 'Room', field: 'room' },
  { title: 'Arrival', field: 'dateOfArrival', type: 'date' },
  { title: 'Departure', field: 'dateOfDeparture', type: 'date' }
]

const CheckInTable = ({ checkIns }) => {
  const classes = useStyles()
  return (
    <div className={classes.tableWrapper}>
      <MaterialTable
        columns={columns}
        data={checkIns}
        style={tableStyle}
        title='CheckIns'
        actions={[
          {
            icon: 'delete',
            tooltip: 'Delete User',
            iconProps: {
              color: 'primary',
              style: {},
              fontSize: 'small'
            },
            onClick: (event, rowData) => {
              console.log({ event })
              console.log({ rowData })
              window.alert('Screaming')
            }
          }
        ]}
        detailPanel={rowData => {
          return (
            <div
              style={{
                fontSize: 100,
                textAlign: 'center',
                color: 'white',
                backgroundColor: '#FDD835'
              }}
            >
              {rowData.dateOfArrival}
            </div>
          )
        }}
        options={{
          toolbar: true,
          paging: false,
          actionsColumnIndex: -1,
          selection: false,
          exportButton: true,
          exportAllData: true,
          search: true,
          searchFieldAlignment: 'left',
          showTitle: false,
          toolbarButtonAlignment: 'right',
          sorting: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          searchFieldVariant: 'outlined',
          columnsButton: true,
          thirdSortClick: false
        }}
      />
    </div>
  )
}

export default CheckInTable
