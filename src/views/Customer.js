import React from "react";

import {
  CAvatar,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CHeaderNav,
} from "@coreui/react";
import { TableDropdown } from "../components/index";

import CIcon from "@coreui/icons-react";
import { cilPeople } from "@coreui/icons";

import avatar1 from "../assets/images/avatars/1.jpg";
import avatar2 from "../assets/images/avatars/2.jpg";
import avatar3 from "../assets/images/avatars/3.jpg";
import avatar4 from "../assets/images/avatars/4.jpg";
import avatar5 from "../assets/images/avatars/5.jpg";
import avatar6 from "../assets/images/avatars/6.jpg";

const CustomerDashboard = () => {
  const tableExample = [
    {
      avatar: { src: avatar1, status: "success" },
      name: "lidya desalegn",
      phone: "0911111111",
      numberOfOrder: 5,
      status: "deliverd",
    },
    {
      avatar: { src: avatar5, status: "danger" },

      name: "seble stayew",

      phone: "0922222222",
      numberOfOrder: 8,
      status: "pending",
    },
    {
      avatar: { src: avatar2, status: "warning" },
      name: "yohna desalegn",
      phone: "093333333",
      numberOfOrder: 7,
      status: "calncelled",
    },
    {
      avatar: { src: avatar3, status: "secondery" },
      name: "aldana aldana",

      phone: "0944444444",
      numberOfOrder: 10,
      status: "orderd",
    },
    {
      avatar: { src: avatar4, status: "success" },

      name: "eyob eyob",

      phone: "095566677888",
      numberOfOrder: 1,
      status: "deliverd",
    },
    {
      avatar: { src: avatar6, status: "danger" },

      name: "bright bright",

      phone: "0919863245",
      numberOfOrder: 11,
      status: "cancelled",
    },
    {
      avatar: { src: avatar1, status: "success" },
      name: "lidya desalegn",
      phone: "0911111111",
      numberOfOrder: 5,
      status: "deliverd",
    },
    {
      avatar: { src: avatar5, status: "danger" },

      name: "seble stayew",

      phone: "0922222222",
      numberOfOrder: 8,
      status: "pending",
    },
  ];

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCol md={12}>
              <h5 style={{ marginTop: "2%", marginLeft: "2%" }}>Customers</h5>
            </CCol>
            <CCardBody>
              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Phone No
                    </CTableHeaderCell>
                    <CTableHeaderCell>Number Order</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Status
                    </CTableHeaderCell>
                    <CTableHeaderCell>...</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={item.avatar.src}
                          status={item.avatar.status}
                        />
                      </CTableDataCell>

                      <CTableDataCell>
                        <div>{item.name}</div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        {item.phone}
                      </CTableDataCell>

                      <CTableDataCell>
                        <div>{item.numberOfOrder}</div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        {item.status}
                      </CTableDataCell>

                      <CTableDataCell>
                        <CHeaderNav className="ms-3">
                          <TableDropdown />
                        </CHeaderNav>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default CustomerDashboard;
