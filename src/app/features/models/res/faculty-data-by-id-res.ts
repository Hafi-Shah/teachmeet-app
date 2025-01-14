export interface FacultyDataById {
  faculty: {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    title: string;
    department: number;
    email: string;
    password: string;
    gender: string;
    profileImage: string;
    mobileNumber: string;
    status: boolean;
  };
  officeTimings: OfficeTiming[];
}

export interface OfficeTiming {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
  label?: string;
}
