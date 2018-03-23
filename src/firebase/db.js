import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetRooms = () =>
  db.ref('rooms').once('value');

export const doCreateUserReservation = (user_id, room_id, check_in, check_out, guests_ctr, title) =>
  db.ref(`bookings`).push({
    user_id,
    room_id,
    check_in,
    check_out,
    guests_ctr,
    title
  });

export const onceGetBookingsByUserId = (user_id) =>
  db.ref('bookings').orderByChild("user_id").equalTo(user_id).once('value');

export const getRoomByRoomId = (room_id) =>
  db.ref(`rooms/${room_id}`).once('value');
// Other Entity APIs ...