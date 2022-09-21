import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import { loadFull } from 'tsparticles'
import { useMemo } from 'react'
import { useCallback } from 'react'

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'bubble',
          },
          resize: true,
        },
        modes: {
          bubble: {
            color: '#4FBDBA',
            distance: 200,
            duration: 2,
            opacity: 1,
            size: 5,
            speed: 1,
          },
        },
      },
      particles: {
        color: {
          value: '#fca311',
        },
        links: {
          blink: false,
          color: '#fca311',
          consent: false,
          distance: 120,
          enable: true,
          opacity: 0.8,
          width: 1,
        },
        move: {
          attract: {
            enable: false,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          bounce: false,
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: false,
            area: 2000,
          },
          limit: 0,
          // value: 4000,
        },
        opacity: {
          animation: {
            enable: true,
            value: { min: 0.3, max: 0.7 },
            speed: { min: 0.3, max: 0.7 },
            sync: false,
          },
          random: { enable: true, minimumValue: 0.3 },
          value: { min: 0.2, max: 0.8 },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: 1,
        },
        fullScreen: {
          zIndex: -1,
          enable: false,
        },
      },
    }
  }, [])

  const particlesInit = useCallback(engine => {
    // loadSlim(engine)
    loadFull(engine)
  }, [])

  return <Particles init={particlesInit} options={options} />
}

export default ParticlesComponent
