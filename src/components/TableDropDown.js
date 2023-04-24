import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
 
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar8 from '../assets/images/avatars/8.jpg'

const TableDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <div>...</div>
      </CDropdownToggle>

      <CDropdownMenu className="pt-0" placement="bottom-end">
       

        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>


        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Order
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>


        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>

        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>

        

      </CDropdownMenu>
    </CDropdown>
  )
}

export default TableDropdown
