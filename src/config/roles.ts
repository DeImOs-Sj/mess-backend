import { Role } from '@prisma/client';

const allRoles = {
  [Role.STUDENT]: [],
  [Role.COMMITTEE]: ['getUsers', 'manageUsers'],
  [Role.MANAGER]: ['getUsers', 'manageUsers'],
  [Role.RESIDENT_OFFICER]: ['getUsers', 'manageUsers', ''],
  [Role.SUPERVISOR]: ['getUsers', 'manageUsers','me'],
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
