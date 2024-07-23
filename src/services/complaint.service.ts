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


export default {
    createComplaint,
};
