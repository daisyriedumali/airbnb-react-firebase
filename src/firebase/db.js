import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetUserByUserId = (user_id) =>
  db.ref(`users/${user_id}`).once('value');

export const onceGetRooms = () =>
  db.ref('rooms').once('value');

export const doCreateUserReservation = (user_id, room_id, title, check_in, check_in_timestamp, check_out, check_out_timestamp) =>
  db.ref(`bookings`).push({
    user_id,
    room_id,
    title,
    check_in,
    check_in_timestamp,
    check_out,
    check_out_timestamp
  });

export const onceGetBookingsByUserId = (user_id) =>
  db.ref('bookings').orderByChild("user_id").equalTo(user_id).once('value');

export const getRoomByRoomId = (room_id) =>
  db.ref(`rooms/${room_id}`).once('value');

export const onceGetBookingsByRoomId = (room_id) =>
  db.ref('bookings').orderByChild("room_id").equalTo(room_id).once('value');

export const onceRemoveBooking = (booking_id) =>
  db.ref(`bookings/${booking_id}`).remove();
// Other Entity APIs ...