import { PrismaClient, JobStatus} from './src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

// 1. Load the database URL from the .env file
dotenv.config();

const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// 2. Define our 15 realistic mock job applications
const mockJobs = [
  { company: "Apple", role: "iOS Engineer", jobUrl: "https://apple.com/jobs", status: "offer", notes: "Dream job!" },
  { company: "Google", role: "Software Engineer, L3", jobUrl: "https://google.com/careers", status: "interview", notes: "Finished phone screen, scheduling onsite." },
  { company: "Meta", role: "Production Engineer", jobUrl: "https://meta.com/careers", status: "applied", notes: "Applied with referral." },
  { company: "Netflix", role: "Senior Frontend Developer", jobUrl: "https://netflix.com/careers", status: "rejected", notes: "Got rejected after final round. Good feedback though." },
  { company: "Stripe", role: "Backend Engineer", jobUrl: "https://stripe.com/jobs", status: "interview", notes: "Technical screen scheduled for Thursday." },
  { company: "Microsoft", role: "Software Engineer II", jobUrl: "https://microsoft.com/careers", status: "applied", notes: "Cold applied on LinkedIn." },
  { company: "Amazon", role: "SDE I", jobUrl: "https://amazon.jobs", status: "ghosted", notes: "Online assessment submitted 3 weeks ago, no reply." },
  { company: "Airbnb", role: "Fullstack Engineer", jobUrl: "https://airbnb.com/careers", status: "rejected", notes: "Resume screen reject." },
  { company: "Figma", role: "Product Designer", jobUrl: "https://figma.com/careers", status: "applied", notes: "Really cool team." },
  { company: "Vercel", role: "Developer Advocate", jobUrl: "https://vercel.com/careers", status: "offer", notes: "Offered! Base salary looks good." },
  { company: "Uber", role: "Software Engineer, Core Infrastructure", jobUrl: "https://uber.com/careers", status: "applied", notes: "Applied online." },
  { company: "Lyft", role: "iOS Developer", jobUrl: "https://lyft.com/careers", status: "ghosted", notes: "Recruiter call happened, then silence." },
  { company: "OpenAI", role: "Research Engineer", jobUrl: "https://openai.com/careers", status: "applied", notes: "Long shot application." },
  { company: "Datadog", role: "Solutions Engineer", jobUrl: "https://datadog.com/careers", status: "interview", notes: "Passed coding challenge." },
  { company: "Slack", role: "Senior Developer Relations", jobUrl: "https://slack.com/careers", status: "applied", notes: "Applied on portal." }
];

async function main() {
  console.log("Seeding database...");

  // 1. Find the first user in the database to link these jobs to
  const user = await prisma.user.findFirst();
  if (!user) {
    console.log("No users found in the database. Please register a user first!");
    await pool.end();
    return;
  }

  // 2. Clear existing jobs
  await prisma.job.deleteMany();
  
  // 3. Create mock jobs linked to the user's ID
  for (const job of mockJobs) {
    await prisma.job.create({
      data: {
        ...job,
        userId: user.id, // 👈 Link the job to the user!
        status: job.status as JobStatus,
        appliedAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
      }
    });
  }
  
  console.log(`Database seeded successfully for user: ${user.email}`);
  await pool.end();
}


main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  });
