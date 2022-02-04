import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/menu";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/Notifications";
function Header() {
  return (
    <div className="Header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.google.com/search?q=gmail+logo&rlz=1C1CHBF_enIN928IN928&sxsrf=APq-WBtmOsgfsjAzCfvYOqxKOu4GSbCd1Q:1643960941393&tbm=isch&source=iu&ictx=1&vet=1&fir=JUsyBMMPNAfhRM%252C9HMaQtDs7iPR_M%252C_%253Bh7P6g-UU5_5-2M%252CT0IaL89e8I5rvM%252C_%253BpdvAVvcOO4CoAM%252CvMxQKELbMD2fAM%252C_%253BMjC-s-HJUFo8EM%252CeY4zvIuZH4nfIM%252C_%253BWVLEvuHVbfwQxM%252CeAZBCWaPowT9hM%252C_%253BuGwURSGi6ipmoM%252Cgq0MKfGXxpm4iM%252C_%253BeE4kp85qaFD70M%252CsYBiScsZMV4ojM%252C_%253BvCoJs5pYR6VpZM%252C_qL0imqROltb4M%252C_%253BPbtWULsG0t4DMM%252C9HMaQtDs7iPR_M%252C_%253ByPF06K2Aa1t7wM%252CbVeEGMzCQJRkGM%252C_%253BJVxjXVOifARopM%252CsIVj_UPm5lF3zM%252C_%253BMOJwCPRQMGKF2M%252C92-mpoobTNeWBM%252C_%253BcFHA1xsadGne9M%252CC3vb0EKxNNOnyM%252C_%253BBQt4OIrDlQFj8M%252C9HMaQtDs7iPR_M%252C_&usg=AI4_-kRVkA2SearBzj-rEIeG0cVFhNtXSw&sa=X&sqi=2&ved=2ahUKEwi9tL7fx-X1AhVXJrkGHb5iCnAQ9QF6BAgNEAE#imgrc=h7P6g-UU5_5-2M"
          alt="gmail logo"
        />
      </div>
      <div className="header_middele">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
      </div>
    </div>
  );
}
export default Header;
