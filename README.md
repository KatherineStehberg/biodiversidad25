# Biodiversidad.cl

## Project Description

Biodiversidad.cl is a comprehensive web platform dedicated to the exploration, education, and conservation of Chile's rich biodiversity. Our mission is to provide a centralized source of information about Chilean flora and fauna, promote environmental awareness, and facilitate participation in conservation projects.

## Features

1. **Interactive Biodiversity Explorer**
   - Interactive map showcasing species distribution across Chile
   - Filtering options by species type, conservation status, and region

2. **Species Database**
   - Detailed information on native species, including descriptions, habitats, and conservation status
   - High-quality images and audio recordings (where available)
   - Search functionality with advanced filters

3. **Educational Resources**
   - Lesson plans and activities for educators
   - Interactive quizzes and games for students
   - Downloadable fact sheets and infographics

4. **Conservation Projects**
   - Information on current conservation initiatives
   - Volunteer opportunities and ways to contribute
   - Progress tracking for ongoing projects

5. **Community Engagement**
   - User forums for sharing observations and discussing biodiversity topics
   - Citizen science projects for data collection
   - Event calendar for workshops, webinars, and field trips

6. **Research Hub**
   - Resources for researchers, including datasets and methodologies
   - Links to scientific studies and publications
   - Collaboration opportunities for scientists and institutions

7. **User Authentication**
   - Secure login and registration system
   - User profiles with customizable preferences
   - Social login options (Google, Facebook, Instagram)

## Technologies Used

- **Frontend**:
  - Next.js 13 (App Router)
  - React 18
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components

- **Backend**:
  - Node.js
  - Prisma (ORM)
  - PostgreSQL (Database)

- **Authentication**:
  - NextAuth.js

- **Deployment**:
  - Vercel (for hosting)

## Local Development Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- PostgreSQL (version 12 or higher)
- Git

### Installation and Setup

1. Ensure you have the following installed on your system:
   - Node.js (version 14 or higher)
   - npm (comes with Node.js)
   - Git
   - PostgreSQL (version 12 or higher)

2. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/biodiversidad-cl.git
   \`\`\`

3. Navigate to the project directory:
   \`\`\`
   cd biodiversidad-cl
   \`\`\`

4. Install project dependencies:
   \`\`\`
   npm install
   \`\`\`

5. Set up PostgreSQL:
   - Create a new PostgreSQL database named `biodiversidad_cl`
   - Note your PostgreSQL username, password, and port (default is 5432)

6. Create a `.env.local` file in the root directory and add the following environment variables:
   \`\`\`
   DATABASE_URL="postgresql://username:password@localhost:5432/biodiversidad_cl"
   NEXTAUTH_SECRET="your_nextauth_secret"
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   FACEBOOK_CLIENT_ID="your_facebook_client_id"
   FACEBOOK_CLIENT_SECRET="your_facebook_client_secret"
   INSTAGRAM_CLIENT_ID="your_instagram_client_id"
   INSTAGRAM_CLIENT_SECRET="your_instagram_client_secret"
   \`\`\`
   Replace `username`, `password`, and other placeholder values with your actual credentials.

7. Set up the database schema:
   \`\`\`
   npx prisma db push
   \`\`\`

8. Generate Prisma client:
   \`\`\`
   npx prisma generate
   \`\`\`

9. (Optional) Seed the database with initial data:
   \`\`\`
   npm run seed
   \`\`\`

10. Start the development server:
    \`\`\`
    npm run dev
    \`\`\`

11. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
