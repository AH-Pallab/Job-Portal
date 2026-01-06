import { useEffect } from "react";
import { useState } from "react";
import JobCard from "./JobCard";

const Jobs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://job-portal-server-alpha-blush.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  const loadSkeliton = (
    <div className="flex justify-center mt-12">
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );

  return (
    <div>
      <h2 className="text-center font-bold text-2xl md:text-4xl">
        Jobs of the day
      </h2>
      <p className="text-gray-500 text-center mt-3">
        Search and connect with the right candidates faster.
      </p>
      {loading ? (
        loadSkeliton
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-7">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job}></JobCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
