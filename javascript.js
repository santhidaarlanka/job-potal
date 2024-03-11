document.addEventListener("DOMContentLoaded", function() {
    // Sample job listings
    const jobs = [
        { title: "Software Engineer", company: "Tech Co.", location: "New York, NY" },
        { title: "Marketing Specialist", company: "Marketing Agency", location: "Los Angeles, CA" },
        { title: "Data Analyst", company: "Data Inc.", location: "Chicago, IL" },
        { title: "Graphic Designer", company: "Design Studio", location: "San Francisco, CA" }
    ];

    const jobList = document.getElementById("jobs");

    // Populate job listings
    jobs.forEach(job => {
        const jobItem = document.createElement("li");
        jobItem.classList.add("job");

        const jobTitle = document.createElement("h3");
        jobTitle.textContent = job.title;

        const jobCompany = document.createElement("p");
        jobCompany.textContent = "Company: " + job.company;

        const jobLocation = document.createElement("p");
        jobLocation.classList.add("location");
        jobLocation.textContent = "Location: " + job.location;

        jobItem.appendChild(jobTitle);
        jobItem.appendChild(jobCompany);
        jobItem.appendChild(jobLocation);

        jobList.appendChild(jobItem);
    });
});
