import { Role } from '@prisma/client';

const allRoles = {
  [Role.STUDENT]: ['me','createComplaint','getComplaints'],
  [Role.COMMITTEE]: ['getUsers', 'manageUsers' ,'me','getComplaints','complaintDashboard'],
  [Role.MANAGER]: ['getUsers', 'manageUsers' ,'me','getComplaints','complaintDashboard'],
  [Role.CAMPUS_DIRECTOR]: ['getUsers', 'manageUsers' ,'me','getComplaints','complaintDashboard'],
  [Role.RESIDENT_OFFICER]: ['getUsers', 'manageUsers' ,'me','getComplaints','complaintDashboard'],
  [Role.SUPERVISOR]: ['getUsers', 'manageUsers' ,'me','getComplaints','complaintDashboard'],
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
