import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { companies as recoilCompanies } from '../../Recoil/atoms'

const BigHeader = styled.h2`
  font-size: 120px;
  margin-left: 250px;
  color: rgba(15, 21, 64, .2);
  font-weight: bold;
  margin-top: 50px;
  user-select: none;
`

const DashboardTableWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  h2 {
    font-size: 120px;
  }

`

const TextDiv = styled.div`
  flex-basis: 50%;

  div {
    margin-top: 10px;
    margin-left: 200px;
  }
`

const TableWrapper = styled.div`
  flex-basis: 45%;
  margin-top: 50px;
  border: 1px solid rgba(0, 102, 245, .15);
  background-color: #fff;
  padding: 40px 40px 30px;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  box-shadow: 1px 15px 18px rgba(0 ,0 , 0, .03);
  border-radius: 6px;

  table {
    font-size: 14px;
    width: 100%;
    text-align: center;

    thead {
      height: 70px;
      background: whitesmoke;
    }

    tr {
      height: 30px;
    }

  }
`

const DashboardTable = () => {
  const { data: companies, loading } = useRecoilValue(recoilCompanies)
  if (loading) return 'Loading'
  return (
    <>
      <BigHeader>Companies</BigHeader>
      <DashboardTableWrapper>
        <TextDiv>
          <div>
            <p>List of companies on HMS.</p>
          </div>
        </TextDiv>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Company</th>
                <th>Subdomain</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, i) => (
                <tr key={i}>
                  <td>{++i}</td>
                  <td>{company.name}</td>
                  <td>{company.subdomain}</td>
                </tr>))}

            </tbody>
          </table>
        </TableWrapper>
      </DashboardTableWrapper>
    </>
  )
}

export default DashboardTable
