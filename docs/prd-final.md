# Recruitify Product Requirements Document (PRD)

## Goals and Background Context

### Goals
* [cite_start]Provide a centralized, user-friendly platform for job seekers to search, save, and apply for jobs. [cite: 507]
* Offer a simple, efficient interface for employers to post job listings and manage applicants.
* Onboard 50 employers and 1,000 active job seekers within the first 6 months of launch.
* Successfully facilitate 500 job applications through the platform within the first quarter.

### Background Context
The current job search market is fragmented and inefficient. Job seekers struggle with tracking applications across multiple sites, while employers find existing platforms overly complex or ineffective for managing candidate pipelines. [cite_start]Recruitify solves this by creating a unified ecosystem that streamlines the hiring process for both parties, aiming to reduce friction and improve outcomes for seekers and employers alike. [cite: 508]

### Change Log
| Date | Version | Description | Author |
| :--- | :--- |:--- |:--- |
| 2025-09-04 | 1.0 | Initial PRD draft | John, PM |

---
## Requirements

### Functional
* **FR1**: Users (both Job Seekers and Employers) must be able to create an account and sign in.
* **FR2**: Job Seekers shall be able to create and manage a basic user profile.
* **FR3**: Job Seekers shall be able to search for jobs using filters for keywords, location, and category.
* **FR4**: Job Seekers shall be able to save jobs to a personalized list for later viewing.
* **FR5**: Job Seekers shall be able to apply for jobs directly through the platform.
* **FR6**: Employers shall be able to create and manage a basic company profile.
* **FR7**: Employers shall be able to post new job listings.
* **FR8**: Employers shall be able to view and manage their active job listings from a dashboard.
* **FR9**: Employers shall be able to view a list of applicants for each of their job listings.

### Non-Functional
* **NFR1**: The platform shall be a responsive web application, providing a functional and intuitive experience on desktop, tablet, and mobile devices.
* **NFR2**: The platform must ensure the security and privacy of all user data, including personal information, resumes, and application details.
* **NFR3**: The platform must be highly available, with a target uptime of 99.5% for the MVP.
* **NFR4**: Core user actions, such as job searches, must render results in under 3 seconds.

---
## User Interface Design Goals

### Overall UX Vision
To create a clean, modern, and intuitive interface that minimizes friction for both job seekers and employers. The design should feel professional and trustworthy, inspiring confidence throughout the job application and recruitment process.

### Key Interaction Paradigms
The platform will utilize standard, well-understood web application paradigms to ensure ease of use. This includes a primary navigation bar for top-level sections, filterable data tables for search results, and modal forms for key actions like applying for a job or posting a new listing.

### Core Screens and Views
* Login & Registration
* Main Dashboard (with views for both Job Seekers and Employers)
* Job Search Results Page
* Job Details Page
* Application Form
* Employer Job Posting Form
* Applicant Viewing Page

### Accessibility
* WCAG AA

### Branding
* To be defined. The platform will require a professional and modern brand identity, including a logo, color palette, and typography.

### Target Device and Platforms
* Web Responsive

---
## Technical Assumptions

### Repository Structure
* **Monorepo**: A single repository will contain both the frontend (Next.js) and backend (Spring Boot) applications.

### Service Architecture
* **Monolith**: For the MVP, the backend will be a single, monolithic Spring Boot service. This is the simplest approach to start and can be broken into microservices later if needed.

### Testing Requirements
* **Full Testing Pyramid**: The project will include a comprehensive testing strategy, including unit tests, integration tests, and end-to-end (E2E) tests to ensure quality.

### Additional Technical Assumptions and Requests
* **Backend**: The RESTful API will be built using **Spring Boot** with Java/Kotlin.
* **Frontend**: The user interface will be built using **Next.js** (a React framework) and the **Ant Design** component library.
* **Database**: **PostgreSQL** will be the relational database for the application.
* **Deployment**: The initial target will be a cloud provider (e.g., AWS, Vercel), with specifics to be determined by the Architect.

---
## Epic List

* **Epic 1: Foundation & User Onboarding**
    * **Goal**: Establish the project's technical foundation and implement a complete user registration, login, and profile management system for both Job Seekers and Employers.
* **Epic 2: Job Seeker Core Experience**
    * **Goal**: Enable authenticated Job Seekers to search, view, save, and apply for jobs, delivering the primary value proposition for this user segment.
* **Epic 3: Employer Core Experience**
    * **Goal**: Empower authenticated Employers to post, manage, and view applicants for their job listings, completing the platform's core functionality.

---
## Epic 1: Foundation & User Onboarding
**Expanded Goal**: This epic establishes the complete technical foundation for the Recruitify platform. It includes setting up the monorepo, establishing the database, and delivering the first piece of tangible user value: a complete, secure registration and login system for both Job Seeker and Employer user types.

**Story 1.1: Initial Project Scaffolding**
* **As a** developer, **I want** to set up the monorepo with the initial Spring Boot and Next.js applications, **so that** we have a clean, organized structure for development.
* **Acceptance Criteria**:
    1.  A monorepo is created and initialized with Git.
    2.  A basic Spring Boot application is created within the monorepo.
    3.  A basic Next.js application is created within the monorepo.
    4.  A "health-check" endpoint on the backend returns a `200 OK` status.
    5.  The frontend application successfully starts and displays a placeholder page.

**Story 1.2: Database and User Schema Setup**
* **As a** developer, **I want** to configure the database connection and create the initial user schema, **so that** the application can store and manage user data.
* **Acceptance Criteria**:
    1.  The Spring Boot application can successfully connect to the PostgreSQL database.
    2.  A database migration script is created for the `users` table.
    3.  The `users` table includes fields for ID, email, hashed password, user type (Seeker/Employer), and timestamps.

**Story 1.3: User Registration Backend**
* **As a** user, **I want** to register for a new account via an API endpoint, **so that** I can create my profile on Recruitify.
* **Acceptance Criteria**:
    1.  A `POST /api/auth/register` endpoint is created.
    2.  The endpoint accepts an email, password, and user type.
    3.  The user's password is securely hashed before being stored in the database.
    4.  The endpoint returns a success response upon creating a user.
    5.  The endpoint returns an error if the email address is already in use.

**Story 1.4: User Registration Frontend**
* **As a** user, **I want** a registration form to create a new account, **so that** I can sign up for the service.
* **Acceptance Criteria**:
    1.  A registration page is created at `/register`.
    2.  The form includes fields for email, password, and a choice between "Job Seeker" and "Employer".
    3.  Client-side validation is implemented for all fields.
    4.  On successful submission, the form calls the `POST /api/auth/register` endpoint.
    5.  The user is redirected to the login page after successful registration.

**Story 1.5: User Login Backend**
* **As a** user, **I want** to log in to my account via an API endpoint, **so that** I can access my personalized content.
* **Acceptance Criteria**:
    1.  A `POST /api/auth/login` endpoint is created.
    2.  The endpoint accepts an email and password.
    3.  Upon successful authentication, the endpoint returns a JWT (JSON Web Token).
    4.  The endpoint returns an error for invalid credentials.

**Story 1.6: User Login Frontend**
* **As a** user, **I want** a login form to access my account, **so that** I can use the platform's features.
* **Acceptance Criteria**:
    1.  A login page is created at `/login`.
    2.  The form includes fields for email and password.
    3.  On successful submission, the form calls the `POST /api/auth/login` endpoint.
    4.  The returned JWT is securely stored in the browser.
    5.  The user is redirected to their dashboard after a successful login.

**Story 1.7: Protected Routes**
* **As a** developer, **I want** to secure certain pages and API endpoints, **so that** only authenticated users can access them.
* **Acceptance Criteria**:
    1.  Backend middleware is created to validate the JWT on protected API endpoints.
    2.  Frontend logic is created to protect pages (e.g., `/dashboard`).
    3.  Unauthenticated users attempting to access protected resources are redirected to the login page.
    4.  Authenticated users are allowed access to protected resources.

---
## Epic 2: Job Seeker Core Experience
**Expanded Goal**: This epic delivers the complete, end-to-end experience for the Job Seeker. It builds upon the authentication system from Epic 1 to allow users to find relevant job opportunities, view details, save them for later, and submit applications directly through the platform.

**Story 2.1: Job Data Schema**
* **As a** developer, **I want** to create the database schema for jobs, **so that** job listings can be stored and retrieved.
* **Acceptance Criteria**:
    1.  A database migration script is created for the `jobs` table.
    2.  The `jobs` table includes fields for ID, title, description, company, location, category, and timestamps.
    3.  The table is linked to the employer who posted it (foreign key to the `users` table).

**Story 2.2: Job Search Backend**
* **As a** job seeker, **I want** an API endpoint to search for jobs, **so that** I can find relevant opportunities.
* **Acceptance Criteria**:
    1.  A `GET /api/jobs` endpoint is created.
    2.  The endpoint returns a paginated list of active job listings.
    3.  The endpoint supports query parameters for filtering by keyword, location, and category.
    4.  The endpoint does not require authentication.

**Story 2.3: Job Search Frontend**
* **As a** job seeker, **I want** a user interface to search for jobs, **so that** I can easily find opportunities.
* **Acceptance Criteria**:
    1.  A job search page is created at `/jobs`.
    2.  The page includes input fields for keyword, location, and a dropdown for category.
    3.  When the user performs a search, the page calls the `GET /api/jobs` endpoint.
    4.  The search results are displayed in a clear, easy-to-read list.
    5.  Each item in the list links to the detailed job view.

**Story 2.4: View Job Details**
* **As a** job seeker, **I want** to view the full details of a job listing, **so that** I can decide if it's a good fit for me.
* **Acceptance Criteria**:
    1.  A `GET /api/jobs/{id}` endpoint is created to fetch a single job by its ID.
    2.  A dynamic page is created at `/jobs/[id]` to display the job details.
    3.  The page displays all relevant information, including title, company, location, and the full job description.

**Story 2.5: Save Job Functionality**
* **As an** authenticated job seeker, **I want** to save a job to my profile, **so that** I can easily find it later.
* **Acceptance Criteria**:
    1.  A `POST /api/users/me/saved-jobs` endpoint is created to save a job for the logged-in user.
    2.  A corresponding `saved_jobs` table is created in the database to link users and jobs.
    3.  A "Save" button is present on the job details page.
    4.  Clicking "Save" calls the API and provides visual feedback to the user.
    5.  A page is created at `/dashboard/saved-jobs` that lists all jobs the user has saved.

**Story 2.6: Application Submission**
* **As an** authenticated job seeker, **I want** to apply for a job through the platform, **so that** I can centralize my job search process.
* **Acceptance Criteria**:
    1.  A `POST /api/applications` endpoint is created for submitting a new application.
    2.  An `applications` table is created in the database linking a user, a job, and application status.
    3.  An "Apply" button is present on the job details page.
    4.  Clicking "Apply" opens a simple form or confirmation dialog.
    5.  Upon submission, the application is recorded, and the user can see it in their application history on their dashboard.

---
## Epic 3: Employer Core Experience
**Expanded Goal**: This epic completes the core functionality of the Recruitify platform by building the essential tools for Employers. Building on the established user and job systems, this epic will enable employers to post new job listings, manage their active posts from a dashboard, and view the candidates who have applied.

**Story 3.1: Employer Dashboard**
* **As an** employer, **I want** a dedicated dashboard after I log in, **so that** I have a central place to manage my recruiting activities.
* **Acceptance Criteria**:
    1.  When a user with the "Employer" role logs in, they are directed to `/dashboard`.
    2.  The dashboard displays a welcome message.
    3.  The dashboard contains prominent links/buttons to "Post a New Job" and "View My Job Listings".

**Story 3.2: Post Job Backend**
* **As an** authenticated employer, **I want** an API endpoint to post a new job listing, **so that** I can attract candidates.
* **Acceptance Criteria**:
    1.  A `POST /api/jobs` endpoint is created and protected for employer roles.
    2.  The endpoint accepts all necessary job details (title, description, location, etc.).
    3.  A new record is created in the `jobs` table, associated with the authenticated employer's ID.
    4.  The endpoint returns the newly created job object upon success.

**Story 3.3: Post Job Frontend**
* **As an** employer, **I want** a form to create and post a new job listing, **so that** I can easily add new openings to the platform.
* **Acceptance Criteria**:
    1.  A "Post a New Job" page is created, accessible from the employer dashboard.
    2.  The form includes fields for all required job information (title, description, etc.).
    3.  Client-side validation is implemented for all fields.
    4.  On successful submission, the form calls the `POST /api/jobs` endpoint.
    5.  The user is redirected to their "Manage Jobs" dashboard view upon success.

**Story 3.4: Manage Jobs Backend**
* **As an** authenticated employer, **I want** an API endpoint to retrieve all the jobs I have posted, **so that** I can see my active listings.
* **Acceptance Criteria**:
    1.  A `GET /api/employers/me/jobs` endpoint is created and protected.
    2.  The endpoint returns a list of all jobs associated with the authenticated employer.

**Story 3.5: Manage Jobs Frontend**
* **As an** employer, **I want** a page on my dashboard to see all my active job listings, **so that** I can manage my recruitment pipeline.
* **Acceptance Criteria**:
    1.  A "View My Job Listings" page is created, accessible from the employer dashboard.
    2.  The page calls the `GET /api/employers/me/jobs` endpoint to fetch the jobs.
    3.  The jobs are displayed in a list or table format.
    4.  Each job listing in the view links to a page where applicants for that job can be seen.

**Story 3.6: View Applicants Backend**
* **As an** authenticated employer, **I want** an API endpoint to see the candidates who applied for a specific job, **so that** I can review potential hires.
* **Acceptance Criteria**:
    1.  A `GET /api/jobs/{id}/applications` endpoint is created and protected.
    2.  The endpoint verifies that the authenticated user is the owner of the requested job ID.
    3.  The endpoint returns a list of all applications for that job, including basic candidate information.

**Story 3.7: View Applicants Frontend**
* **As an** employer, **I want** to see a list of all candidates who have applied to one of my jobs, **so that** I can begin the review process.
* **Acceptance Criteria**:
    1.  A page is created to display applicants for a specific job.
    2.  The page calls the `GET /api/jobs/{id}/applications` endpoint.
    3.  A list of applicants is displayed, showing key information (e.g., name, email, application date).

---
## Next Steps

This PRD is complete and validated. The following prompts should be used to hand off to the next specialists in the workflow.

### UX Expert Prompt
> Based on the attached PRD, particularly the 'User Interface Design Goals' section and the user-facing stories, please create a detailed UI/UX Specification document (`front-end-spec.md`).

### Architect Prompt
> Using the attached PRD as the source of truth, especially the 'Technical Assumptions' and all epics/stories, please create the comprehensive full-stack architecture document (`fullstack-architecture.md`).