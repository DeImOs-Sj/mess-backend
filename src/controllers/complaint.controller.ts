import httpStatus from 'http-status';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { complaintService } from '../services';
import prisma from '../client';

const createComplaint = catchAsync(async (req, res) => {
    const {
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
    } = req.body;


    const complaint = await complaintService.createComplaint(
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
    );

    res.status(httpStatus.CREATED).send(complaint);
});


const getComplaints = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['id','campus','mess','date_of_happening','is_clean','meal_time','createdAt']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await complaintService.queryComplaints(filter, options);
    res.send(result);
});

const getDashboard = catchAsync(async (req, res) => {

    const pending_queries = await prisma.complaint.count({
        where: {
            status: 0
        }
    })

    const resolved_queries = await prisma.complaint.count({
        where: {
            status: 1
        }
    })

    const total_queries = await prisma.complaint.count()


    res.send({
        "pending": pending_queries,
        "resolved": resolved_queries,
        "total": total_queries
    });
});
  

export default {
    createComplaint,
    getComplaints,
    getDashboard
};
