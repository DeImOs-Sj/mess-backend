import express from 'express';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import { userValidation } from '../../validations';
import { userController } from '../../controllers';

const router = express.Router();

router
  .route('/')
  .post(auth('createComplaint'), validate(userValidation.createUser), userController.createUser)

export default router;

/**
 * @swagger
 * tags:
 *   name: Complaint
 *   description: Complaint management get, update, create, delete
 */

/**
 * @swagger
 * /complaint:
 *   post:
 *     summary: Create Complaint
 *     description: Only students can create complaints.
 *     tags: [Complaint]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - campus
 *               - mess
 *               - date
 *               - student_name
 *               - student_phno
 *               - college_name
 *               - is_clean
 *               - is_pest_controlled
 *               - food_handler_protocols
 *               - complaint_desc
 *               - suggestion_improvement
 *               - complaint_category
 *               - meal_time
 *               - image_photos
 * 
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               campus:
 *                 type: string
 *               mess:
 *                 type: string
 *               date:
 *                 type: string
 *               student_name:
 *                 type: string
 *               college_name:
 *                 type: string
 *               is_clean:
 *                 type: string
 *               is_pest_controlled:
 *                 type: string
 *               food_handler_protocols:
 *                 type: string
 *               complaint_desc:
 *                 type: string
 *               meal_time:
 *                 type: string
 *               image_photos:
 *                 type: string[]
 *               
 *             example:
 *               email: "ramesh@gmail.com",
 *               campus: "Ambegaon",
 *               mess: "SIT Mess",
 *               date: "20-03-2024",
 *               student_name: "",
 *               student_phno: "",
 *               college_name: "",
 *               is_clean: "",
 *               is_pest_controlled: "",
 *               food_handler_protocols: "",
 *               complaint_desc: "",
 *               suggestion_improvement: "",
 *               complaint_category: "",
 *               meal_time: "",
 *               image_photos: "",
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all users
 *     description: Only admins can retrieve all users.
 *     tags: [Complaint]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: User name
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: User role
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
