# Recruitify Product Requirements Document (PRD)

### **Goals and Background Context**

**Goals**
*   Onboard 50 employers and 1,000 active job seekers within the first 6 months.
*   Facilitate 500 successful job applications through the platform within the first quarter.
*   Reduce the time it takes for a job seeker to find and apply for 5 relevant jobs.
*   Increase the application-to-interview ratio for employers using the platform.

**Background Context**

The current job search landscape is fragmented and inefficient for both job seekers and employers. Job seekers struggle to find relevant opportunities and track applications across multiple sites, while employers find existing platforms complex and ineffective for sourcing quality candidates. Recruitify aims to solve this by providing a streamlined, all-in-one web platform that simplifies the job search and application management process for both parties.

**Change Log**

| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2025-09-23 | 1.0 | Initial draft based on Project Brief. | John (PM) |

---

### **Requirements**

**Functional**
1.  **FR1: Job Seeker Account Management:** Users shall be able to create an account, log in, log out, and manage a basic profile.
2.  **FR2: Employer Account Management:** Users shall be able to create an employer account, log in, log out, and manage a basic company profile.
3.  **FR3: Job Search and Filtering:** Job seekers shall be able to search for jobs using keywords and filter results by location and job category.
4.  **FR4: Job Post Management:** Employers shall be able to create new job listings, view all their active listings on a dashboard, and edit or deactivate them.
5.  **FR5: View Job Details:** All users shall be able to view the detailed description of a job listing.
6.  **FR6: Save Jobs:** Job seekers shall be able to save jobs to a personal "Saved Jobs" list for later viewing.
7.  **FR7: Application Submission:** Job seekers shall be able to directly apply for a job through the platform.
8.  **FR8: View Applicants:** Employers shall be able to view a list of all applicants for each of their job postings.
9.  **FR9: Application History:** Job seekers shall be able to view a history of all the jobs they have applied for through the platform.

**Non-Functional**
1.  **NFR1: Responsiveness:** The web application must be fully responsive and provide a seamless user experience on desktop, tablet, and mobile browsers.
2.  **NFR2: Security:** All user data, especially personal information and application details, must be stored securely.
3.  **NFR3: Technology Stack:** The platform will be built using Next.js (Frontend), Spring Boot (Backend), and PostgreSQL (Database) as defined in the technical preferences.
4.  **NFR4: Architecture:** The MVP will be built with a monolithic service architecture contained within a single monorepo.

---

### **User Interface Design Goals**

**Overall UX Vision**
The user experience should be clean, modern, and intuitive, aiming to minimize friction for both job seekers and employers. The design will prioritize clarity, efficiency, and trustworthiness, ensuring users can accomplish their primary tasks with ease. The interface will feel professional and straightforward, avoiding unnecessary complexity.

**Key Interaction Paradigms**
*   **Search-centric:** A prominent search bar will be the primary entry point for job seekers.
*   **Dashboard Model:** Employers will manage all their activities (job posts, applicants) from a central dashboard.
*   **List-based Management:** Job results, saved jobs, application history, and applicant lists will be presented in clear, filterable, and sortable lists.
*   **Guided Forms:** User registration, profile creation, and job posting will be handled through simple, clearly defined forms.

**Core Screens and Views**
*   Home/Landing Page
*   Job Search Results Page
*   Job Details Page
*   Login / Registration Page
*   Job Seeker Profile & Application History Page
*   Employer Dashboard & Job Management Page
*   "Create/Edit Job Post" Page
*   "View Applicants" Page

**Accessibility: WCAG AA**

**Branding**
No specific branding guidelines have been provided for the MVP. The initial design will use a clean, neutral color palette and a professional look and feel that can be easily adapted to a formal style guide post-launch.

**Target Device and Platforms: Web Responsive**

---

### **Technical Assumptions**

**Repository Structure: Monorepo**
A monorepo will be used to manage both the frontend (Next.js) and backend (Spring Boot) code in a single repository.

**Service Architecture: Monolith**
For the MVP, a monolithic service architecture will be implemented. This approach is suitable for the initial feature set and allows for rapid development. The architecture should still be designed with modularity in mind to allow for potential future migration to microservices.

**Testing Requirements: Unit & Integration Testing**
All critical business logic in both the frontend and backend must be covered by unit tests. Integration tests should be written for key user workflows, such as user registration and application submission, to ensure the components work together correctly.

**Additional Technical Assumptions and Requests**
*   **Frontend:** Next.js with Ant Design for the component library.
*   **Backend:** Spring Boot (Java) to build the RESTful API.
*   **Database:** PostgreSQL will be the relational database.

---

### **Epic List**

*   **Epic 1: Foundation & Core Job Seeker Experience.**
    *   **Goal:** Establish the foundational infrastructure of the application and deliver the core job search experience for the primary user (Job Seeker). This includes project setup, user registration/login, and the ability to search, view, and save jobs.
*   **Epic 2: Employer Functionality & Application Workflow.**
    *   **Goal:** Introduce the employer side of the platform and connect the two user types. This epic enables employers to post and manage jobs, and allows job seekers to submit applications.
*   **Epic 3: Dashboard & History.**
    *   **Goal:** Enhance the user experience by providing tools for management and tracking. This includes the job seeker's application history and the employer's dashboard for managing applicants.

---

### **Epic 1: Foundation & Core Job Seeker Experience**

**Goal:** Establish the foundational infrastructure of the application and deliver the core job search experience for the primary user (Job Seeker). This includes project setup, user registration/login, and the ability to search, view, and save jobs.

---

**Story 1.1: Project & Infrastructure Setup**

As a Dev Team,
I want a configured project structure and CI/CD pipeline,
so that we have a stable foundation for building and deploying the application.

**Acceptance Criteria**
1.  A monorepo is initialized containing both the Next.js frontend and Spring Boot backend applications.
2.  A basic CI/CD pipeline is configured to build and run tests for both applications upon code commits.
3.  The initial PostgreSQL database schema for users and jobs is created and managed via migration files.
4.  The frontend application can successfully fetch data from a backend health-check endpoint to verify connectivity.

---

**Story 1.2: Basic Job Seeker Registration & Login**

As a first-time visitor,
I want to register for an account and log in,
so that I can access personalized features of the platform.

**Acceptance Criteria**
1.  A user can navigate to a registration page with fields for email and password.
2.  Upon submitting the registration form, a new user record is created in the database.
3.  A user can navigate to a login page.
4.  Upon successful login with correct credentials, the user is authenticated and redirected to the homepage.
5.  Appropriate error messages are shown for invalid registration or login attempts (e.g., "User already exists," "Invalid credentials").

---

**Story 1.3: View Job Listings**

As any user,
I want to see a list of available jobs on the platform,
so that I can begin to explore opportunities.

**Acceptance Criteria**
1.  The homepage or a dedicated "Jobs" page displays a list of job postings.
2.  Each job in the list displays the job title, company name, and location.
3.  The backend provides a public (unauthenticated) API endpoint to fetch a paginated list of jobs.
4.  The database is seeded with sample job data for development and initial display purposes.

---

**Story 1.4: Search and Filter Job Listings**

As a job seeker,
I want to search for jobs by keyword and filter them by location and category,
so that I can quickly find opportunities relevant to me.

**Acceptance Criteria**
1.  The job listings page includes a text input for keyword searching.
2.  The page includes filter controls (e.g., dropdowns) for location and job category.
3.  Applying a search or filter updates the list of jobs displayed on the page without a full page reload.
4.  The backend API for fetching jobs supports filtering by keyword, location, and category.

---

**Story 1.5: View Job Details**

As a job seeker,
I want to click on a job to see its full description,
so that I can evaluate if it's a good fit.

**Acceptance Criteria**
1.  Clicking on any job item in the search results list navigates the user to a unique page for that job.
2.  The job detail page displays all relevant information, including title, company, location, and the full job description.
3.  The backend provides a public API endpoint to fetch a single job by its unique ID.

---

**Story 1.6: Save a Job**

As a logged-in job seeker,
I want to save a job to a personal list,
so that I can easily find and review it later.

**Acceptance Criteria**
1.  When viewing a job's detail page, a logged-in user is shown a "Save Job" button/icon.
2.  Clicking "Save Job" adds the job to that user's personal list of saved jobs.
3.  The button's appearance changes to indicate the job is saved (e.g., "Saved" or a filled-in icon).
4.  A logged-out user does not see the "Save Job" button.
5.  The backend provides an authenticated API endpoint to add or remove a job from a user's saved list.

---

### **Epic 2: Employer Functionality & Application Workflow**

**Goal:** Introduce the employer side of the platform and connect the two user types. This epic enables employers to post and manage jobs, and allows job seekers to submit applications.

---

**Story 2.1: Employer Registration & Company Profile**

As a hiring manager,
I want to register an employer account and create a basic company profile,
so that I can post jobs and represent my company on the platform.

**Acceptance Criteria**
1.  The registration flow allows a user to choose an "Employer" account type.
2.  An employer user is prompted to create a basic company profile (e.g., company name, website, brief description) after their first login.
3.  The system backend distinguishes between "Job Seeker" and "Employer" user roles, granting different permissions for each.
4.  The company profile information is saved and associated with the employer's user account.

---

**Story 2.2: Create a Job Posting**

As a logged-in employer,
I want to fill out a form to create and post a new job listing,
so that I can attract candidates to my open role.

**Acceptance Criteria**
1.  A logged-in employer can access a "Post a New Job" page.
2.  The page contains a form with all necessary fields for a job listing (e.g., title, location, category, salary, description).
3.  Upon successful form submission, a new job record is created in the database, linked to the employer's company.
4.  The newly created job becomes publicly visible on the main job listings page.

---

**Story 2.3: Employer Job Management Dashboard**

As a logged-in employer,
I want a dashboard where I can see and manage all the jobs I've posted,
so that I can maintain a clear view of my active listings.

**Acceptance Criteria**
1.  A logged-in employer has a dedicated "Dashboard" page.
2.  The dashboard displays a list of all jobs posted by that employer.
3.  Each job in the list displays its title, status (e.g., Active, Inactive), and a count of applicants.
4.  The employer can perform basic management actions from the dashboard, such as editing or deactivating a job post.

---

**Story 2.4: Apply for a Job**

As a logged-in job seeker,
I want to apply for a job directly through the platform,
so that I can easily and efficiently submit my candidacy.

**Acceptance Criteria**
1.  When viewing a job details page, a logged-in job seeker is shown a prominent "Apply" button.
2.  Clicking "Apply" presents a simple application form (e.g., fields for name, email, and a resume upload).
3.  Upon submission, an application record is created, linking the job seeker's profile, the job, and the submitted information.
4.  After applying, the button's state changes to "Applied" to prevent duplicate submissions.
5.  A user who is not logged in is prompted to log in or register when they click the "Apply" button.

---

**Story 2.5: View Job Applicants**

As a logged-in employer,
I want to view a list of applicants for each of my jobs,
so that I can begin the candidate review process.

**Acceptance Criteria**
1.  From the employer dashboard, clicking on a specific job posting navigates to a page listing all applicants for that role.
2.  The applicant list displays the name of each candidate and the date they applied.
3.  The employer can click on an individual applicant to view the details they submitted with their application (e.g., view their profile, download their resume).
4.  The backend provides a secure API endpoint for an employer to retrieve applicants only for jobs they own.

---

### **Epic 3: Dashboard & History**

**Goal:** Enhance the user experience by providing tools for management and tracking. This includes the job seeker's application history and the employer's dashboard for managing applicants.

---

**Story 3.1: Job Seeker "My Applications" Page**

As a logged-in job seeker,
I want a page where I can see all the jobs I have applied for and their status,
so that I can track my job search progress in one place.

**Acceptance Criteria**
1.  A logged-in job seeker can navigate to a "My Applications" page via their profile or a main navigation link.
2.  The page displays a list of all jobs the user has applied to.
3.  Each item in the list shows the job title, company name, the date the application was submitted, and the application's current status (e.g., "Applied," "Under Review").
4.  The backend provides a secure API endpoint to fetch the application history for the currently logged-in user.

---

**Story 3.2: Job Seeker "Saved Jobs" Page**

As a logged-in job seeker,
I want a dedicated page where I can view all the jobs I have saved,
so that I can easily review them and decide whether to apply.

**Acceptance Criteria**
1.  A logged-in job seeker can navigate to a "Saved Jobs" page.
2.  The page displays a list of all jobs the user has previously saved.
3.  The user can click on any job in the list to navigate to its full detail page.
4.  The user can remove a job from their saved list directly from this page.

---

**Story 3.3: Basic Employer Applicant Management**

As a logged-in employer,
I want to change the status of an applicant within my dashboard,
so that I can manage my hiring pipeline and track candidate progression.

**Acceptance Criteria**
1.  When viewing the list of applicants for a job, an employer can change the status for each applicant.
2.  The available status options are: "New," "Under Review," "Interview," and "Closed" (for hired or rejected).
3.  Changing the status updates the application record in the database.
4.  The applicant list on the employer's dashboard visually reflects the updated status for each candidate.

---

**Story 3.4: Job Seeker Application Status Visibility**

As a job seeker,
I want to see if the status of my application changes,
so that I have visibility into where I stand in the hiring process.

**Acceptance Criteria**
1.  When an employer updates an applicant's status (from Story 3.3), the new status is reflected on the job seeker's "My Applications" page.
2.  For the MVP, the system will not send email or push notifications for status changes.
3.  The status shown to the job seeker is a simplified, user-friendly version of the employer's internal status (e.g., "Interview" is displayed as "In Progress").
