# Recruitify Fullstack Architecture Document

## Introduction

This document outlines the complete fullstack architecture for Recruitify, including backend systems, frontend implementation, and their integration. It serves as the single source of truth for AI-driven development, ensuring consistency across the entire technology stack.

### Starter Template or Existing Project
* **Recommendation**: We will use the official starters for our chosen technologies: **`create-next-app`** for the Next.js frontend and **Spring Initializr** for the Spring Boot backend. These will be configured to work together within the monorepo structure defined in the PRD.

### Change Log
| Date | Version | Description | Author |
| :--- | :--- |:--- |:--- |
| 2025-09-07 | 1.0 | Initial architecture draft | Winston, Architect |

---
## High-Level Architecture

### Technical Summary
This architecture describes a modern full-stack web application. The system features a server-side rendered (SSR) frontend built with Next.js, communicating via a REST API with a backend monolith built with Spring Boot. The entire application will be managed within a single monorepo to streamline development and ensure type safety. For infrastructure, we will leverage a hybrid-cloud approach, using Vercel for best-in-class frontend hosting and AWS for our robust, managed PostgreSQL database. This pragmatic approach prioritizes developer experience and leverages the strongest platform for each part of our stack, directly supporting the PRD's goal of building an efficient and reliable platform.

### Platform and Infrastructure Choice
* **Platform:** A hybrid of **Vercel** for the frontend and **Amazon Web Services (AWS)** for the backend/database.
* **Key Services:**
    * **Vercel**: Hosting and CI/CD for the Next.js frontend.
    * **AWS RDS**: Managed PostgreSQL database.
    * **AWS Elastic Beanstalk / App Runner**: Hosting for the Spring Boot REST API (TBD, simple managed compute).
* **Rationale**: This "best-of-breed" approach uses Vercel's world-class infrastructure, which is purpose-built for Next.js, ensuring optimal frontend performance and developer workflow. It pairs this with the reliability, security, and scalability of AWS's managed database services.

### Repository Structure
* **Structure:** Monorepo.
* **Monorepo Tool:** We will start with `npm workspaces` for simplicity. We can introduce a more advanced tool like `Turborepo` later if build caching and task orchestration become necessary.
* **Package Organization:** The monorepo will contain separate packages for the `api` (Spring Boot) and `web` (Next.js) applications, along with a `shared` package for common types and utilities.

### High Level Architecture Diagram
```mermaid
graph TD
    subgraph "User's Browser"
        U[User]
    end

    subgraph "Vercel Platform"
        FE[Next.js Frontend]
    end

    subgraph "AWS Cloud"
        API[Spring Boot REST API]
        DB[(RDS PostgreSQL)]
    end

    U -- HTTPS --> FE
    FE -- HTTPS/API Calls --> API
    API -- DB Connection --> DB