import React from 'react';
import styles from './Notification.module.css';
import NotificationIcon from "../../../public/assets/Notification.svg"

export default function Notification({children}) {
  return (
    <div>
    <NotificationIcon />
    {children}
    </div>
  )
}