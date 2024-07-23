import { Role } from '@prisma/client';
import Joi from 'joi';
import { password } from './custom.validation';


const createComplaint = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    campus: Joi.string().required(),
    mess: Joi.string().required(),
    date_of_happening: Joi.date().required(),
    student_name: Joi.string().required(),
    student_phno: Joi.string().required(),
    college_name: Joi.string().required(),
    is_clean: Joi.boolean().default(false),
    is_pest_controlled: Joi.boolean().default(false),
    food_handler_protocols: Joi.boolean().default(false),
    complaint_desc: Joi.string(),
    suggestion_improvement: Joi.string(),
    complaint_category: Joi.string().required(),
    meal_time: Joi.string().default("LUNCH"),
    image_photos: Joi.array().items(Joi.string()),
  })
};

const getUsers = {
  query: Joi.object().keys({
    id: Joi.number(),
    campus: Joi.string(),
    mess: Joi.string(),
    date_of_happening: Joi.date(),
    is_clean: Joi.boolean(),
    meal_time: Joi.string(),
    createdAt: Joi.date(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer()
  })
};

export default {
    createComplaint,
    getUsers
};
