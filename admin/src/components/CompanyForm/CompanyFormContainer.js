import React, { useEffect } from 'react'
import CompanyForm from './CompanyForm'
import { addCompany, updateCompany } from '../../helpers/api'
import useAsyncFn from '../../hooks/useAsyncFn'
import { useRecoilState } from 'recoil'
import { companies as recoilCompanies } from '../../Recoil/atoms'

const CompanyFormContainer = ({ company, closeModal }) => {
  const apiMethod = company ? updateCompany : addCompany
  const { error, loading, data, executeFn: submitForm } = useAsyncFn(apiMethod)
  const [companies, setCompanies] = useRecoilState(recoilCompanies)

  useEffect(() => {
    if (data) {
      setCompanies({ ...companies, loading: false, data: [...companies.data, data.company] })
      closeModal()
    }
    // eslint-disable-next-line
  }, [data])

  return (
    <CompanyForm
      company={company}
      error={error}
      loading={loading}
      data={data}
      submitForm={submitForm}
    />
  )
}

export default CompanyFormContainer
