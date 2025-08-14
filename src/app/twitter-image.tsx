import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Shadrack Olaloko - Nigerian Yoruba Christian Music Artist'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '72px', fontWeight: 'bold', marginBottom: '20px' }}>
          🎵
        </div>
        <div style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '20px' }}>
          Shadrack Olaloko
        </div>
        <div style={{ fontSize: '32px', opacity: 0.9, marginBottom: '10px' }}>
          Nigerian Yoruba Christian Music Artist
        </div>
        <div style={{ fontSize: '24px', opacity: 0.8 }}>
          Based in Ireland • Dublin Shows
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
