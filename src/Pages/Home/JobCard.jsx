import { FaLocationDot } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { motion } from "motion/react";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job || {};
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="card bg-base-100 card-lg shadow-sm bg-blue-50 border border-blue-400 space-y-4 hover:bg-white"
    >
      <div className="card-body">
        {/* Head */}
        <div className="flex gap-4">
          <img src={company_logo} alt="" className="w-14 h-14" />
          <div>
            <h2 className="font-semibold text-xl">{company}</h2>
            <p className="flex items-center gap-1 text-gray-500 text-sm">
              <FaLocationDot />
              {location}
            </p>
          </div>
        </div>
        {/* Head end & Body */}
        <h2 className="text-lg font-semibold mt-3">{title} </h2>
        <div className="  text-gray-500">
          <p className="flex items-center gap-0.5 text-sm">
            <IoBag />
            Job Type: {jobType}
          </p>
          <p className="flex items-center gap-0.5 text-sm">
            <IoTimeOutline />
            Deadline: {applicationDeadline}{" "}
          </p>
        </div>
        <p className="text-gray-600 mt-5 ">{description}</p>

        {/* Details */}
        <button className="btn w-24 ml-auto text-blue-800 bg-blue-100">
          Details
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;
