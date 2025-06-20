import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Notification from '../components/Notification';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', title: 'Profile updated successfully' },
    { id: 2, type: 'info', title: 'New update available' },
    { id: 3, type: 'warning', title: 'Password expires in 5 days' },
    { id: 4, type: 'error', title: 'Failed to fetch data' },
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">🔔 Notifications</h1>

      <div className="space-y-4 w-full">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification
              key={n.id}
              type={n.type}
              title={n.title}
              onClose={() => removeNotification(n.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NotificationsPage;
