import express from 'express';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import { complaintValidation } from '../../validations';
import { complaintController } from '../../controllers';

const router = express.Router();

router
  .route('/')
  .post(auth('createComplaint'), validate(complaintValidation.createComplaint), complaintController.createComplaint)
  .get(auth('getComplaints'), validate(complaintValidation.getComplaints), complaintController.getComplaints);


router
  .route('/dashboard')
  .get(auth('complaintDashboard'), complaintController.getDashboard);

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
 *               - date_of_happening
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
 *               student_phno:
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
 *               suggestion_improvement:
 *                 type: string
 *               complaint_category:
 *                 type: string
 *               meal_time:
 *                 type: string
 *               image_photos:
 *                 type: array
 *                 items:
 *                   type: string
 *             example:
 *               email: "ramesh@gmail.com"
 *               campus: "Ambegaon"
 *               mess: "SIT Mess"
 *               date_of_happening: "2024-08-01T10:00:00Z"
 *               student_name: "Ramesh"
 *               student_phno: "1234567890"
 *               college_name: "SIT"
 *               is_clean: false
 *               is_pest_controlled: false
 *               food_handler_protocols: false
 *               complaint_desc: "The food is not up to the mark."
 *               suggestion_improvement: "Improve the food quality."
 *               complaint_category: "Food Quality"
 *               meal_time: "Lunch"
 *               image_photos: ["image1.jpg", "image2.jpg"]
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
 *   get:
 *     summary: Get all complaints
 *     description: Anyone can retrive the basic info.
 *     tags: [Complaint]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 * 
 *       - in: query
 *         name: id
 *         schema:
 *           type: number
 *         description: Complaint ID
 *       - in: query
 *         name: campus
 *         schema:
 *           type: string
 *         description: Mess Campus
 *       - in: query
 *         name: mess
 *         schema:
 *           type: string
 *         description: Mess Name
 *       - in: query
 *         name: date_of_happening
 *         schema:
 *           type: string
 *         description: Date when incident happened
 *       - in: query
 *         name: is_clean
 *         schema:
 *           type: string
 *         description: Was mess clean
 *       - in: query
 *         name: meal_time
 *         schema:
 *           type: string
 *         description: Was it Breakfast, Lunch or Dinner
 *       - in: query
 *         name: createdAt
 *         schema:
 *           type: string
 *         description: Complained created
 * 
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



/**
 * @swagger
 * /complaint/dashboard:
 *   get:
 *     summary: Dashboard analytics data
 *     description: Only Supervisors can access it.
 *     tags: [Complaint]
 *     security:
 *       - bearerAuth: []
 * 
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