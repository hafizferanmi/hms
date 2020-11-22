import React from 'react'
import classnames from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Avatar, Box, Tooltip } from '@material-ui/core'
import { EditOutlined, DeleteForeverOutlined } from '@material-ui/icons'
import { STAFF_ROLES_LABEL } from '../../constants/staff'
import useModal from '../../hooks/useModal'
import useDataProvider from '../../hooks/useDataProvider'
import ConfirmModal from '../misc/ConfirmModal'
import { blue, lightGreen, red, green, cyan, grey } from '@material-ui/core/colors'
import { getInitials } from '../../helpers/misc'
import CheckIcon from '@material-ui/icons/CheckCircleOutline'
import CrossIcon from '@material-ui/icons/HighlightOff'
import useCurrentStaff from '../../hooks/useCurrentStaff'

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  tableHeader: {
    background: '#f5f5fb',
    fontSize: 14,
    borderRadius: 'none'
  },
  tableBody: {
    cursor: 'pointer'
  },
  tableHeaderCell: {
    color: '#b5c0d0',
    textTransform: 'uppercase'
  },
  tableCell: {
    color: '#0c2e67',
    fontSize: 15,
    letterSpacing: 0.1
  },
  tableRow: {
    '&:hover': {
      border: 'none',
      boxShadow: '0 3px 12px 0 rgba(0, 102, 245, 0.1)',
      '& $disableIcon': {
        backgroundColor: green[50],
        color: green[900]
      },
      '& $deleteIcon': {
        backgroundColor: red[50],
        color: red[900]
      },
      '& $editIcon': {
        backgroundColor: cyan[50],
        color: cyan[900]
      }
    }
  },
  paddedTableRow: {
    '& > td:nth-child(1), & > th:first-of-type': {
      paddingLeft: 40
    }
  },
  staffStatus: {
    width: 'fit-content',
    padding: '3px 8px',
    textTransform: 'uppercase',
    borderRadius: 6,
    fontSize: 10
  },
  staffName: {
    marginLeft: 10
  },
  staffEnabled: {
    background: lightGreen[200],
    color: lightGreen[900]
  },
  staffDisabled: {
    background: grey[200],
    color: grey[900]
  },
  avatar: {
    color: 'white',
    backgroundColor: blue[400],
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: 14
  },
  iconWrapper: {
    padding: '2px 6px',
    borderRadius: '50%',
    marginRight: 15,
    '& svg': {
      marginTop: 5,
      fontSize: 20
    }
  },
  disableIcon: {
    backgroundColor: grey[200],
    color: grey[500]
  },
  deleteIcon: {
    backgroundColor: grey[200],
    color: grey[500]
  },
  editIcon: {
    backgroundColor: grey[200],
    color: grey[500]
  }
}))

const tableHeaders = ['Name', 'Email', 'Phone No', 'Job title', 'Status', '']

const StaffTable = ({ staffs, handleOpen }) => {
  const classes = useStyles()
  const { _id: staffId } = useCurrentStaff()
  const { dataInContext } = useDataProvider()
  const { handleDeleteStaff, handleDisableStaff } = dataInContext
  const deleteModal = useModal()
  const disableModal = useModal()
  return (
    <>
      <TableContainer elevation={0} component={Paper}>
        <Table className={classes.table} aria-label='staffs table'>
          <TableHead className={classes.tableHeader}>
            <TableRow className={classes.paddedTableRow}>
              {
                tableHeaders.map((header) => (
                  <TableCell className={classes.tableHeaderCell} key={header}>{header}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {staffs.map((staff) => (
              <TableRow key={staff.name} className={classnames(classes.paddedTableRow, classes.tableRow)}>
                <TableCell className={classes.tableCell}>
                  <Box component='div' display='flex' alignItems='center'>
                    <Avatar alt={staff.name} src={staff.displayImage} className={classes.avatar}>
                      {getInitials(staff.name)}
                    </Avatar>
                    <span className={classes.staffName}>{staff.name}</span>
                  </Box>
                </TableCell>
                <TableCell className={classes.tableCell} align='left'>{staff.email}</TableCell>
                <TableCell className={classes.tableCell} align='left'>{staff.phone}</TableCell>
                <TableCell className={classes.tableCell} align='left'>{STAFF_ROLES_LABEL[staff.role]}</TableCell>
                <TableCell className={classes.tableCell} align='left'>
                  {
                    <div className={classnames(classes.staffStatus, staff.disabled ? classes.staffDisabled : classes.staffEnabled)}>
                      {staff.disabled ? 'Disabled' : 'Enabled'}
                    </div>
                  }
                </TableCell>

                <TableCell align='left'>
                  <Box display='flex'>
                    <Tooltip title='Edit staff' aria-label='Edit'>
                      <div className={classnames(classes.iconWrapper, classes.editIcon)}>
                        <EditOutlined onClick={() => handleOpen(staff)} />
                      </div>
                    </Tooltip>
                    <div className={classnames(classes.iconWrapper, classes.disableIcon)}>
                      {staff.disabled && (
                        <Tooltip title='Enable staff' aria-label='Enable staff'>
                          <CheckIcon disabled={staff.disabled} onClick={() => disableModal.openModal(staff)} />
                        </Tooltip>
                      )}
                      {!staff.disabled && (
                        <Tooltip title='Disable staff' aria-label='Disable staff'>
                          <CrossIcon
                            disabled={staff.disabled}
                            onClick={staffId === staff._id ? () => window.alert('You cannot disable yourself.') : () => disableModal.openModal(staff)}
                          />
                        </Tooltip>
                      )}
                    </div>
                    <div className={classnames(classes.iconWrapper, classes.deleteIcon)}>
                      <Tooltip title='Delete staff' aria-label='Delete'>
                        <DeleteForeverOutlined
                          onClick={staffId === staff._id ? () => window.alert('You cannot delete yourself.') : () => deleteModal.openModal(staff)}
                        />
                      </Tooltip>
                    </div>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ConfirmModal
          isOpen={deleteModal.isOpen}
          title='Delete staff'
          closeModal={deleteModal.closeModal}
          confirmAction={() => handleDeleteStaff(deleteModal.data._id)}
          message={`Do you want to delete staff with name ${deleteModal.data && deleteModal.data.name}`}
        />
        <ConfirmModal
          isOpen={disableModal.isOpen}
          title={`${disableModal.data && disableModal.data.disabled ? 'Enable' : 'Disable'} staff`}
          closeModal={disableModal.closeModal}
          confirmAction={() => handleDisableStaff(disableModal.data)}
          message={`Do you want to ${disableModal.data && disableModal.data.disabled ? 'enable' : 'disable'} staff with name ${disableModal.data && disableModal.data.name}`}
        />

      </TableContainer>
    </>
  )
}

export default StaffTable
