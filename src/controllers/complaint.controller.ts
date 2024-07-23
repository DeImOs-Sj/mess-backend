import httpStatus from 'http-status';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { complaintService } from '../services';

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

export default {
    createComplaint
};
