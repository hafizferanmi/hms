import Company from '../models/company'

export const staffBelongsToCompany = (staff, subdomain) => {
  try {
    const company = Company.find({ subdomain })
    const companyId = company._id
    const staffCompanyId = staff.company
    if (companyId === staffCompanyId) {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

export const staffCanPerformOperation = (staff, operation) => {
  return true
}
