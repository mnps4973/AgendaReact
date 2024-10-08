import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { stickers, users } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedStickers() {
   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

   await client.sql`
     CREATE TABLE IF NOT EXISTS stickers (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       image VARCHAR(255) NOT NULL
     );
   `;

   const insertedStickers = await Promise.all(
     stickers.map(
       (sticker) => client.sql`
         INSERT INTO stickers (id, name, image)
         VALUES (${sticker.id}, ${sticker.name}, ${sticker.image})
         ON CONFLICT (id) DO NOTHING;
       `,
     ),
   );

   return insertedStickers;
 }

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedStickers();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
