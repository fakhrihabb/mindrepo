import { useEffect, useRef } from 'react'

function AudioWave() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const startTimeRef = useRef(Date.now())
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const resizeCanvas = () => {
      // Get viewport width, accounting for potential scrollbar
      const viewportWidth = window.innerWidth
      canvas.width = viewportWidth - (window.innerWidth - document.documentElement.clientWidth)
      canvas.height = 200
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    const animate = () => {
      const currentTime = Date.now()
      const elapsed = (currentTime - startTimeRef.current) / 1000 // seconds
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Exponential decay functions that approach but never reach zero
      // These create smooth, continuous transitions without harsh stops
      const decayRate = 0.05 // Controls how fast the chaos decays (lower = slower)
      
      // Exponential decay: starts at 1, approaches 0 but never reaches it
      const chaosLevel = Math.exp(-decayRate * elapsed)
      
      // Base parameters that the wave approaches as time goes on
      const minAmplitude = 12    // Minimum amplitude (never goes below this)
      const maxAmplitude = 60    // Starting amplitude
      const minFrequency = 0.003 // Minimum frequency (most stable)
      const maxFrequency = 0.025 // Starting frequency (most chaotic)
      const minSpeed = 0.05      // Minimum animation speed (ultra slow)
      const maxSpeed = 0.3       // Starting animation speed (ultra slow)
      const minLayers = 2        // Minimum number of layers
      const maxLayers = 8        // Starting number of layers
      
      // Continuous exponential interpolation
      const noiseAmplitude = minAmplitude + (maxAmplitude - minAmplitude) * chaosLevel
      const baseFrequency = minFrequency + (maxFrequency - minFrequency) * chaosLevel
      const speed = minSpeed + (maxSpeed - minSpeed) * chaosLevel
      const layerFloat = minLayers + (maxLayers - minLayers) * chaosLevel
      const numLayers = Math.max(minLayers, Math.round(layerFloat))
      
      // Draw multiple wave layers
      for (let layer = 0; layer < numLayers; layer++) {
        ctx.beginPath()
        
        // Layer-specific properties
        const layerAmplitude = noiseAmplitude * (0.5 + 0.8 * (layer / numLayers))
        const layerFreq = baseFrequency * (1 + layer * 0.2)
        const layerPhase = (currentTime * speed * 0.0002) + (layer * Math.PI / 4)
        const layerOpacity = 0.6 / (layer + 1)
        
        // Generate wave points
        for (let x = 0; x <= canvas.width; x += 2) {
          // Base sine wave
          const baseWave = Math.sin(x * layerFreq + layerPhase) * layerAmplitude
          
          // Noise and harmonics follow the same exponential decay
          const noise = (Math.random() - 0.5) * layerAmplitude * 0.5 * chaosLevel
          
          // Additional harmonics for complexity - also decay exponentially (ultra slow phases)
          const harmonic1 = Math.sin(x * layerFreq * 2 + layerPhase * 0.3) * layerAmplitude * 0.3 * chaosLevel
          const harmonic2 = Math.sin(x * layerFreq * 3 + layerPhase * 0.15) * layerAmplitude * 0.2 * chaosLevel
          
          const y = canvas.height / 2 + baseWave + noise + harmonic1 + harmonic2
          
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        
        // Style the wave using accent color
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim()
        ctx.strokeStyle = `${accentColor}${Math.round(layerOpacity * 255).toString(16).padStart(2, '0')}`
        ctx.lineWidth = 4 - layer * 0.3 // Thicker lines
        ctx.stroke()
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])
  
  return (
    <div className="audio-wave-container" style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100vw',
      height: '200px',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  )
}

export default AudioWave