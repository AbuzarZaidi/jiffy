import React from 'react'
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
const BottomNav2 = () => {
    const [value, setValue] = React.useState(0);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,display: { md: "none", lg: "none" }, }} elevation={3}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
  <BottomNavigationAction label="Services" icon={<Link to="/"><img src="/images/documents.svg"/></Link>} />
     <BottomNavigationAction label="Track Order" icon={<Link to="/"><img src="/images/file-search-alt.svg"/></Link>} />
 {/* <BottomNavigationAction label="Pricing" icon={<img src="/images/money.svg"/>} />
      <BottomNavigationAction label="Support" icon={<img src="/images/robot.svg"/>} /> */}
    </BottomNavigation> 
  </Paper>
  )
}

export default BottomNav2