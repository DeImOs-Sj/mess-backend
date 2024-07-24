import { boolean, number } from "joi";

export interface TokenResponse {
  token: string;
  expires: Date;
}

export interface AuthTokensResponse {
  access: TokenResponse;
  refresh?: TokenResponse;
}

export interface Complaint {
  id: number;
  email: string;
  campus: string;
  mess: string;
  date_of_happening: DateTime;
  student_name: string;
  student_phno: string;
  college_name: string;
  
  is_clean: boolean;
  is_pest_controlled: boolean;
  food_handler_protocols: boolean;

  complaint_desc: string;
  suggestion_improvement: string;
  complaint_category: string;
  meal_time: string;
  status: number;
  image_photos: string[];
}