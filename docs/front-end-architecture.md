# Recruitify Frontend Architecture Document

### **Template and Framework Selection**

Based on the Product Requirements Document (PRD) and the UI/UX Specification, the primary front-end framework has already been selected.

*   **Framework:** **Next.js**

Next.js is a comprehensive React framework that includes a complete project setup with a development server, build tooling, routing, and more. Therefore, a separate starter template (like Create React App) is not necessary. We will proceed by scaffolding a new Next.js application.

The chosen component library is **Ant Design**, which will be integrated into the Next.js project.

This decision provides us with a modern, performant, and scalable foundation for the application.

**Change Log**

| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2025-09-23 | 1.0 | Initial draft based on PRD and UX Spec. | Winston (Architect) |

---

### **Frontend Tech Stack**

**Technology Stack Table**

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| Framework | **Next.js** | Chosen for its robust features including server-side rendering, static site generation, and file-system based routing, which provide a performant and scalable foundation. |
| UI Library | **Ant Design** | Selected for its comprehensive set of high-quality, accessible components and powerful theming capabilities, which will accelerate development. |
| State Management | **React Hooks & Context API** | For the MVP, we will use React's built-in state management. This is lightweight, avoids adding external dependencies, and is sufficient for the complexity of our initial feature set. |
| Routing | **Next.js App Router** | We will use the built-in, file-system-based App Router provided by Next.js for all page navigation. |
| Build Tool | **SWC (via Next.js)** | The default compiler for Next.js, chosen for its exceptional speed and performance. |
| Styling | **CSS Modules & Ant Design Theme** | We'll use CSS Modules for component-level styling and Ant Design's theming API to apply our custom branding, ensuring styles are scoped and maintainable. |
| Testing | **Jest & React Testing Library** | The industry standard for testing React applications. This combination allows for robust unit and component-level testing. |
| Form Handling | **Ant Design Form Component** | We will use the powerful built-in Form component from Ant Design to manage form state, validation, and submission, reducing the need for another library. |
| Linting/Formatting | **ESLint & Prettier** | Standard tools to enforce a consistent code style and catch common errors, ensuring high code quality. |

---

### **Project Structure**

```plaintext
/src
|
|-- app/                  # Next.js App Router: Core of the application, contains all routes.
|   |-- (auth)/           # Route group for authentication pages (login, register).
|   |-- (main)/           # Route group for the main application layout.
|   |-- api/              # Route handlers for server-side API endpoints (if needed).
|   |-- globals.css       # Global styles.
|   `-- layout.tsx        # Root layout of the entire application.
|
|-- components/           # Shared, reusable React components.
|   |-- ui/               # General-purpose UI components (e.g., CustomButton).
|   `-- feature/          # Components specific to a feature (e.g., JobCard).
|
|-- context/              # Global state management using React Context.
|   `-- AuthContext.tsx   # Example: Context for managing user authentication state.
|
|-- hooks/                # Custom React hooks (e.g., useAuth, useApi).
|
|-- lib/                  # Utility functions, helper scripts, and API integration.
|   |-- api.ts            # Functions for making requests to the backend API.
|   `-- utils.ts          # General utility functions.
|
|-- styles/               # Global styling, theme configuration.
|   `-- theme.ts          # Ant Design theme override configuration.
|
`-- public/                 # Static assets (images, fonts, icons).
```

---

### **Component Standards**

**Component Template**

```typescript
// src/components/feature/ExampleComponent/ExampleComponent.tsx

import React, { useState } from 'react';
import styles from './ExampleComponent.module.css';

interface ExampleComponentProps {
  initialText: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ initialText }) => {
  const [text, setText] = useState(initialText);

  return (
    <div className={styles.wrapper}>
      <p>{text}</p>
    </div>
  );
};

export default ExampleComponent;
```

**Naming Conventions**

*   **Folders:** `PascalCase` (e.g., `/components/feature/JobCard/`).
*   **Component Files:** `PascalCase` (e.g., `JobCard.tsx`).
*   **Component Functions:** `PascalCase` (e.g., `const JobCard: React.FC<...>`).
*   **Props Interfaces:** `PascalCase` with a `Props` suffix (e.g., `interface JobCardProps`).
*   **Custom Hooks:** `camelCase` with a `use` prefix (e.g., `useAuth.ts`).

---

### **State Management**

We will use React's built-in **Context API** combined with **React Hooks** (`useState`, `useReducer`) for managing global state.

**Store Structure**

```plaintext
/src/context/
    |-- AuthContext.tsx
    `-- ThemeContext.tsx
```

**State Management Template**

```typescript
// src/context/AuthContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType { /* ... */ }
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // ... state and functions
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

---

### **API Integration**

We will use a centralized API client wrapper around `fetch` to handle base URLs, authentication headers, and standardized error handling, located in `/src/lib/api.ts`.

**Service Function Template**

```typescript
// src/lib/jobsApi.ts
import apiClient from './api';

export interface Job { /* ... */ }

export const getJobs = async (): Promise<Job[]> => {
  return apiClient<Job[]>('jobs');
};
```

---

### **Routing**

Routing is managed by the Next.js App Router file system. Protected routes will be handled declaratively using a check in the root layout of a route group.

**Protected Route Configuration**

```typescript
// src/app/(main)/layout.tsx
'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function MainAppLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
```

---

### **Styling Guidelines**

We will use a two-level approach: Global Theming via Ant Design's `<ConfigProvider>` and Component-Level Styles via CSS Modules.

---

### **Testing Requirements**

We will use **Jest** and **React Testing Library**. Tests will focus on user behavior, mocking all external dependencies (API calls, routing, etc.). We will aim for 80% code coverage.

---

### **Environment Configuration**

We will use `.env.local` for environment variables. Variables exposed to the browser must be prefixed with `NEXT_PUBLIC_`.

**Required:** `NEXT_PUBLIC_API_BASE_URL`

---

### **Frontend Developer Standards**

**Critical Coding Rules**
1.  Type Everything.
2.  Handle All States (loading, error, success).
3.  Use Environment Variables for secrets/config.
4.  Keep Components Small & Focused.
5.  Use the API Client for all backend communication.
6.  Write Tests for all new features.
7.  Follow All Conventions in this document.

**Quick Reference**
*   **Commands:** `npm run dev`, `npm run build`, `npm run test`
*   **API Calls:** `import apiClient from '@/lib/api';`
*   **Auth State:** `import { useAuth } from '@/context/AuthContext';`
