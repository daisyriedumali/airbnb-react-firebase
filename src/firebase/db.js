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

export const doCreateUserReservation = (user_id, room_id, check_in, check_out, guests_ctr, purpose) =>
  db.ref(`booking`).push({
    user_id,
    room_id,
    check_in,
    check_out,
    guests_ctr,
    purpose
  });

// Other Entity APIs ...