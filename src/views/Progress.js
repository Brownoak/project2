import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CDropdownItem,
  CBadge,
} from "@coreui/react";
import {
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilCart,
  cilUser,
  cilOptions,
  cilSettings,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import avatar1 from "../assets/images/avatars/1.jpg";
import avatar2 from "../assets/images/avatars/2.jpg";
import avatar3 from "../assets/images/avatars/3.jpg";
import avatar4 from "../assets/images/avatars/4.jpg";
import avatar5 from "../assets/images/avatars/5.jpg";
import avatar6 from "../assets/images/avatars/6.jpg";

const Progress = () => {
  const tableExample = [
    {
      no: { value: "1" },
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        new: true,
        registered: "Jan 1, 2021",
      },
      time: { value: "12:27 GMT" },
      country: { name: "USA", flag: cifUs },
      phoneno: { value: "0912345678" },
      payment: { name: "Mastercard", icon: cilOptions },
      activity: "10 sec ago",
      approved: "Dave",
      driver: "alemu",
    },
    {
      no: { value: "2" },
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios",
        new: false,
        registered: "Jan 1, 2021",
      },
      time: { value: "12:27 GMT" },
      country: { name: "Brazil", flag: cifBr },
      phoneno: { value: "0912345678" },
      payment: { name: "Visa", icon: cilOptions },
      activity: "5 minutes ago",
      approved: "Dave",
      driver: "alemu",
    },
    {
      no: { value: "3" },
      avatar: { src: avatar3, status: "warning" },
      user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2021" },
      time: { value: "12:27 GMT" },
      country: { name: "India", flag: cifIn },
      phoneno: { value: "0912345678" },
      payment: { name: "Stripe", icon: cilOptions },
      activity: "1 hour ago",
      approved: "Dave",
      driver: "alemu",
    },
    {
      no: { value: "4" },
      avatar: { src: avatar4, status: "secondary" },
      user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2021" },
      time: { value: "12:27 GMT" },
      country: { name: "France", flag: cifFr },
      phoneno: { value: "0912345678" },
      payment: { name: "PayPal", icon: cilOptions },
      activity: "Last month",
      approved: "Dave",
      driver: "alemu",
    },
    {
      no: { value: "5" },
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        new: true,
        registered: "Jan 1, 2021",
      },
      time: { value: "12:27 GMT" },
      country: { name: "Spain", flag: cifEs },
      phoneno: { value: "0912345678" },
      payment: { name: "Google Wallet", icon: cilOptions },
      activity: "Last week",
      approved: "Dave",
      driver: "alemu",
    },
    {
      no: { value: "6" },
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        new: true,
        registered: "Jan 1, 2021",
      },
      time: { value: "12:27 GMT" },
      country: { name: "Poland", flag: cifPl },
      phoneno: { value: "0912345678" },
      payment: { name: "Amex", icon: cilOptions },
      activity: "Last week",
      approved: "Dave",
      driver: "alemu",
    },
  ];
  return (
    <CCard className="mb-4">
      <CCardBody>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell>No</CTableHeaderCell>

              <CTableHeaderCell className="ms-3">Ordered By</CTableHeaderCell>
              <CTableHeaderCell>Order Time</CTableHeaderCell>
              <CTableHeaderCell className="text-center">
                Location
              </CTableHeaderCell>
              <CTableHeaderCell className="text-center">
                Phone Number
              </CTableHeaderCell>
              <CTableHeaderCell className="text-center">
                Approved By
              </CTableHeaderCell>
              <CTableHeaderCell className="text-center">
                Driver
              </CTableHeaderCell>
              <CTableHeaderCell className="text-center">
                <CIcon icon={cilOptions} className="me-2" />
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {tableExample.map((item, index) => (
              <CTableRow v-for="item in tableItems" key={index}>
                <CTableDataCell className="text-center">
                  <div>{item.no.value}</div>
                </CTableDataCell>

                <CTableDataCell>
                  <div className="d-flex">
                    <CAvatar
                      size="md"
                      src={item.avatar.src}
                      status={item.avatar.status}
                    />
                    <div className="ms-3">
                      <div>{item.user.name}</div>
                      <div className="small text-medium-emphasis">
                        <span>{item.user.new ? "New" : "Recurring"}</span> |
                        Registered: {item.user.registered}
                      </div>
                    </div>
                  </div>
                </CTableDataCell>
                <CTableDataCell>
                  <div className="small text-medium-emphasis">ordered</div>
                  <strong>{item.activity}</strong>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CIcon
                    size="xl"
                    icon={item.country.flag}
                    title={item.country.name}
                  />
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <div>{item.phoneno.value}</div>
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <CDropdown variant="btn-group">
                    <CDropdownToggle size="sm" color="secondary"><div>{item.approved}</div></CDropdownToggle>
                  </CDropdown>
                  
                </CTableDataCell>
                <CTableDataCell className="text-center">
                  <div>{item.driver}</div>
                </CTableDataCell>

                <CTableDataCell className="text-center">
                  <CDropdown variant="btn-group">
                    <CDropdownToggle color="transparent" split>
                      <CIcon size="sm" icon={item.payment.icon} />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">
                        <CIcon icon={cilSettings} className="me-2" />
                        Setting
                      </CDropdownItem>
                      <CDropdownItem href="#">
                        <CIcon icon={cilCart} className="me-2" />
                        Cart
                        <CBadge color="danger" className="ms-2">
                          42
                        </CBadge>
                      </CDropdownItem>
                      <CDropdownItem href="#">
                        <CIcon icon={cilUser} className="me-2" />
                        Profile
                      </CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  );
};

export default Progress;
