import { Role } from '@prisma/client';

const allRoles = {
  [Role.STUDENT]: ['me','createComplaint','getComplaints'],
  [Role.COMMITTEE]: ['getUsers', 'manageUsers' ,'me','getComplaints','complaintDashboard','getComplaint'],
  [Role.MANAGER]: ['getUsers', 'manageUsers' ,'me','getComplaints','complaintDashboard','getComplaint'],
  [Role.CAMPUS_DIRECTOR]: ['getUsers', 'manageUsers' ,'me','getComplaints','complaintDashboard','getComplaint'],
  [Role.RESIDENT_OFFICER]: ['getUsers', 'manageUsers' ,'me','getComplaints','complaintDashboard','getComplaint'],
  [Role.SUPERVISOR]: ['getUsers', 'manageUsers' ,'me','getComplaints','complaintDashboard','getComplaint'],
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
