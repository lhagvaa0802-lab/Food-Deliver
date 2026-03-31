# ExpressJS Neo

Simple Express + TypeScript + Prisma API project.

## Clone And Run

```powershell
git clone <your-repo-url>
cd expresjs-neo
npm install
```

## Create Environment File

Create a `.env` file in the project root and add:

```env
DATABASE_URL='your_database_url_here'
```

## Recreate Ignored Folders

These paths are ignored by Git and must be recreated on a new PC:

- `node_modules`
- `.env`
- `src/generated/prisma`

Run these commands after `npm install`:

```bash
npx prisma generate
npx prisma migrate deploy
```

## Start The Project

```powershell
npm run dev
```

The server runs at:

```text
http://localhost:3000
```

## Build The Project

```powershell
npm run build
npm start
```

## API Route

Food routes:

- `GET /foods`
- `GET /foods/:id`
- `POST /foods`
- `PUT /foods/:id`
- `DELETE /foods/:id`

Example `POST /foods` body:

```json
{
  "foodName": "Burger",
  "price": 12.5,
  "image": "https://example.com/burger.jpg",
  "ingredients": "Beef, bun, cheese",
  "category": "Fast Food"
}
```
