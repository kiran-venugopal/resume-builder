# Product Requirements Document (PRD): Resume Builder MVP

## 1. Product Overview

**Product Name:** ResumePro (tentative)  
**Purpose:** To help job seekers effortlessly create professional resumes that are visually appealing and ATS-compliant.

**Target Audience:**

- Job seekers across industries (entry to mid-level)
- Recent graduates
- Freelancers and contractors

## 2. Goals & Success Metrics

### Goals

- Enable users to build and download professional resumes in minutes.
- Provide a competitive edge via ATS-optimized scoring and suggestions.
- Offer a compelling freemium model with paid upgrades.

### Success Metrics

- 1000+ signups within 3 months
- Conversion rate from free to paid ≥ 5%
- 80% of users complete resume download
- NPS ≥ 45

## 3. Features & Requirements

### Core MVP Features

| Feature                  | Description                                               | Free               | Paid                  |
| ------------------------ | --------------------------------------------------------- | ------------------ | --------------------- |
| Resume Builder           | Guided form-based editor for all standard resume sections | ✅                 | ✅                    |
| Resume Templates         | Clean, ATS-friendly default template                      | ✅                 | ✅                    |
| Resume Theming           | Choose from 3 limited themes                              | ✅ (3 themes)      | ✅ (10+ themes)       |
| Download Resume          | Export resume as PDF                                      | ✅                 | ✅ ( DOCX export)     |
| ATS Scan                 | Upload or generate resume and get ATS compatibility score | ✅ (3 scans/month) | ✅ (Unlimited scans)  |
| Optimization Suggestions | Tips to improve resume based on ATS scan                  | ✅ (basic tips)    | ✅ (full suggestions) |
| Revision History         | View and restore previous versions                        | ❌                 | ✅                    |
| Multi-format Download    | Export as .docx and PDF                                   | ❌                 | ✅                    |

## 4. User Stories

### As a **free user**, I want to:

- Build my resume quickly with guided input.
- See a live preview of my resume.
- Use from 3 pre-defined visual themes.
- Download my resume as a PDF.
- Perform up to 3 ATS scans per month with limited feedback.
- Be nudged about unlocking full ATS insights and premium themes.

### As a **paid user**, I want to:

- Choose from 10+ resume themes.
- Get unlimited ATS scans and complete optimization tips.
- Download resumes in multiple formats.
- Access version history for edits.

## 5. User Flows

### 1. Resume Creation Flow

Home → Choose/Create Resume → Fill Sections → Preview → Download

### 2. Theming Flow

Builder → Theme Tab → Select Theme → Preview Update → Download

### 3. ATS Scan Flow

Upload Resume / Use Built Resume → Scan → Score → View Suggestions

## 6. Monetization

### Basic Paid Plan ($5–10/mo or $25/year)

- Unlock all 10+ themes
- Unlimited resume downloads (PDF & DOCX)
- No watermark
- Unlimited ATS Scanner + full suggestions
- Revision history
- Priority email support

### Future Revenue Ideas

- Pay-per-download option
- Career coaching add-on
- Cover letter generator
- LinkedIn profile optimization tool
- serve resume as private webpage

## 7. Tech Requirements

### Frontend

- Next JS with Tailwind CSS
- Live PDF rendering (e.g., `react-pdf` / `html2pdf`)
- Drag & drop section reorder

### Backend

- MongoDB or Firebase
- PDF generation service
- ATS scoring engine (ML/NLP or API integration)

### Integrations

- Stripe for payments
- Resume ATS scanner (custom logic or 3rd-party API)

## 8. Timeline (MVP)

| Milestone             | Timeline |
| --------------------- | -------- |
| Wireframes & Design   | Week 1–2 |
| Core Resume Builder   | Week 3–4 |
| Resume Theming        | Week 5   |
| ATS Score Integration | Week 6   |
| Payment System        | Week 7   |
| Testing & QA          | Week 8   |
| Launch                | Week 9   |

## 9. Risks & Assumptions

### Risks

- Users may not pay unless ATS value is clear.
- Designing truly ATS-friendly templates may be tricky.

### Assumptions

- Users want instant feedback on resume strength.
- Resume aesthetics and perceived professionalism drive value perception.

## 10. Out of Scope (MVP)

- AI-powered content suggestions
- Job application tracking
- Cover letter generator (next phase)
