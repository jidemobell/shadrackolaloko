# Shadrack Olaloko - Artist Website

A modern, clean website for Shadrack Olaloko, a Nigerian Yoruba Christian music artist based in Ireland.

## About Shadrack Olaloko

Shadrack Olaloko is a passionate Nigerian Yoruba Christian music artist who has made Ireland his home. With a heart full of faith and a voice that touches souls, Shadrack creates music that bridges cultures and brings people closer to God.

## Website Features

- **Modern Design**: Clean, uncluttered UI with responsive design
- **Hero Section**: Professional landing area with artist photo placeholder
- **About Section**: Detailed biography and mission statement  
- **Music Section**: 
  - YouTube video embeds (placeholders ready for real videos)
  - Streaming platform links (Spotify, Apple Music, YouTube Music, SoundCloud)
  - Musical style tags
- **Shows Section**: 
  - Upcoming performances in Dublin
  - Downloadable event pamphlets
  - Past performance history
  - Booking information
- **Contact Section**: 
  - Contact form for inquiries
  - Social media links
  - Booking availability details

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Turbopack (for development)
- **Deployment Ready**: Static export capable

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── About.tsx
    ├── Contact.tsx
    ├── Hero.tsx
    ├── Music.tsx
    ├── Navigation.tsx
    └── Shows.tsx
```

## Customization Notes

### Adding Real Content

1. **Photos**: Replace placeholder images in Hero and About sections
2. **YouTube Videos**: Update video IDs in Music component
3. **Shows**: Add real event data in Shows component
4. **Contact Info**: Update email and phone number in Contact component
5. **Social Links**: Add real social media URLs

### Styling

The website uses a blue and purple gradient theme with:
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Background: Slate gray gradients
- Clean typography with proper spacing

## Deployment

To build for production:

```bash
npm run build
```

To start production server:

```bash
npm start
```

## License

This project is created for Shadrack Olaloko. All content and design are custom-made for his artistic ministry.

---

*Spreading God's love through music • Dublin, Ireland*
