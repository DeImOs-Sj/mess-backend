import Joi from 'joi';
import { password } from './custom.validation';

const register = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    // phoneNo: Joi.string().empty(),
    // email: Joi.string().email().when('role',{
    //   not: "STUDENT",
    //   then: Joi.required(),
    //   otherwise: Joi.optional().allow("")
    // }),
    // phoneNo: Joi.string().when('role',{
    //   is: "STUDENT",
    //   then: Joi.required(),
    //   otherwise: Joi.optional().allow("")
    // }),
    name: Joi.string().required(),
    role: Joi.string().required().valid("MANAGER","SUPERVISOR","RESIDENT_OFFICER","CAMPUS_DIRECTOR","COMMITTEE","STUDENT"),
    password: Joi.string().required().custom(password)
  })
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    // email: Joi.string().email().when('role',{
    //   not: "STUDENT",
    //   then: Joi.required(),
    //   otherwise: Joi.optional().allow("")
    // }),
    // phoneNo: Joi.string().when('role',{
    //   is: "STUDENT",
    //   then: Joi.required(),
    //   otherwise: Joi.optional().allow("")
    // }),
    role: Joi.string().required().valid("MANAGER","SUPERVISOR","RESIDENT_OFFICER","CAMPUS_DIRECTOR","COMMITTEE","STUDENT"),
    password: Joi.string().required()
  })
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required()
  })
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required()
  })
};

const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required()
  })
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required()
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password)
  })
};

const verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required()
  })
};

export default {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail
};
