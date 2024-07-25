import { User, Role, Prisma } from '@prisma/client';
import httpStatus from 'http-status';
import prisma from '../client';
import ApiError from '../utils/ApiError';
import { encryptPassword } from '../utils/encryption';
import { Complaint } from '../types/response';

/**
 * Create a Complaint
 * @param {Object} userBody
 * @returns {Promise<Complaint>}
 */
const createComplaint = async (
  email: string,
  campus: string,
  mess: string,
  date_of_happening: Date,
  student_name: string,
  student_phno: string,
  college_name: string,

  is_clean: boolean,
  is_pest_controlled: boolean,
  food_handler_protocols: boolean,

  complaint_desc: string,
  suggestion_improvement: string,
  complaint_category: string,
  meal_time: string,
  image_photos: string[],
): Promise<Complaint> => {


  return prisma.complaint.create({
    data: {
      email,
      campus,
      mess,
      date_of_happening,
      student_name,
      student_phno,
      college_name,

      is_clean,
      is_pest_controlled,
      food_handler_protocols,

      complaint_desc,
      suggestion_improvement,
      complaint_category,
      meal_time,
      image_photos
    }
  });
};


/**
 * Query for users
 * @param {Object} filter - Prisma filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<Complaint[]>}
 */
const queryComplaints = async <Key extends keyof Complaint>(
  filter: object,
  options: {
    limit?: number;
    page?: number;
    sortBy?: string;
    sortType?: 'asc' | 'desc';
  },
  keys: Key[] = [
    'id',
    'campus',
    'mess',
    'date_of_happening',
    'status',
    'complaint_category',
    'is_clean',
    'meal_time',
    'createdAt'
  ] as Key[]
): Promise<Pick<Complaint, Key>[]> => {
  const page = options.page ?? 1;
  const limit = options.limit ?? 10;
  const sortBy = options.sortBy;
  const sortType = options.sortType ?? 'desc';
  const complaints = await prisma.complaint.findMany({
    where: filter,
    select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {}),
    skip: (page - 1) * limit,
    take: limit,
    orderBy: sortBy ? { [sortBy]: sortType } : undefined
  });
  return complaints as Pick<Complaint, Key>[];
};



/**
 * Query for users
 * @returns {Promise<Complaint>}
 */
const queryComplaint = async <Key extends keyof Complaint>(
  complaintId: number,
  keys: Key[] = [
      'id',
      'email',
      'campus',
      'mess',
      'date_of_happening',
      'student_name',
      'student_phno',
      'college_name',
      'is_clean',
      'is_pest_controlled',
      'food_handler_protocols',
      'complaint_desc',
      'suggestion_improvement',
      'complaint_category',
      'meal_time',
      'image_photos',
      'status',
      'createdAt'
  ] as Key[]
): Promise<Pick<Complaint, Key> | null> => {
  return await prisma.complaint.findFirst({
    where: {
      id: complaintId
    },
  });
};




export default {
  createComplaint,
  queryComplaints,
  queryComplaint
};
