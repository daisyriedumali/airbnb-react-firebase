import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

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

// Other Entity APIs ...