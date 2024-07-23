import { Role } from '@prisma/client';

const allRoles = {
  [Role.STUDENT]: [],
  [Role.COMMITTEE]: ['getUsers'],
  [Role.MANAGER]: ['getUsers'],
  [Role.RESIDENT_OFFICER]: ['getUsers'],
  [Role.SUPERVISOR]: ['getUsers', 'manageUsers' ,'me', 'createComplaint'],
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
