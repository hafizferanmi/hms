import React from 'react'
import styled from 'styled-components'

const TableWrapper = styled.div`
  background: white;
  margin-top: 40px;
`

const Table = styled.table`
  width: 100%;
`

const CheckInTableHeader = ['', 'Name', 'Room', 'Arrival', 'Departure', '']

const CheckInTable = ({ checkIns }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {CheckInTableHeader.map((header, i) => (<th key={i}>{header} </th>))}
          </tr>
        </thead>
        <tbody>
          {checkIns.map((checkIn, i) =>
            (
              <tr key={i}>
                <td> </td>
                <td> {checkIn.name} </td>
                <td> {checkIn.roomId.number} </td>
                <td> {checkIn.dateOfArrival} </td>
                <td> {checkIn.dateOfDeparture} </td>
                <td>  </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </TableWrapper>
  )
}

export default CheckInTable
