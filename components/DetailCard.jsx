'use client'
import react from "react";
const objectInfo = {
    Sun: {
      type: 'star',
      radius: '696,340 km (109.3 Earth radii)',
      orbitRadius: 'N/A (center of the solar system)',
      averageTemperature: '5,778 K (surface)',
      atmosphere: 'Composed mainly of hydrogen and helium',
      age: '4.6 billion years',
      spectralType: 'G2V (yellow dwarf)',
      funFact: 'The Sun accounts for 99.86% of the mass in the solar system.'
    },
    Mercury: {
      type: 'planet',
      radius: '2,439.7 km (0.383 Earth radii)',
      orbitRadius: '57.9 million km (0.39 AU)',
      averageTemperature: '167°C (day), -183°C (night)',
      atmosphere: 'Very thin, composed mainly of oxygen, sodium, hydrogen, helium, and potassium',
      numberOfMoons: '0',
      funFact: 'Mercury is the smallest planet in our solar system.'
    },
    Venus: {
      type: 'planet',
      radius: '6,051.8 km (0.950 Earth radii)',
      orbitRadius: '108.2 million km (0.72 AU)',
      averageTemperature: '462°C',
      atmosphere: 'Very dense, composed mainly of carbon dioxide and nitrogen',
      numberOfMoons: '0',
      funFact: 'Venus rotates on its axis in the opposite direction to most planets.'
    },
    Earth: {
      type: 'planet',
      radius: '6,371 km (1 Earth radius)',
      orbitRadius: '149.6 million km (1 AU)',
      averageTemperature: '15°C',
      atmosphere: 'Composed mainly of nitrogen and oxygen',
      numberOfMoons: '1',
      funFact: 'Earth is the only known planet to support life.'
    },
    Mars: {
      type: 'planet',
      radius: '3,389.5 km (0.532 Earth radii)',
      orbitRadius: '227.9 million km (1.52 AU)',
      averageTemperature: '-63°C',
      atmosphere: 'Thin, composed mainly of carbon dioxide',
      numberOfMoons: '2',
      funFact: 'Mars is home to Olympus Mons, the largest known volcano in the solar system.'
    },
    Jupiter: {
      type: 'planet',
      radius: '69,911 km (11.209 Earth radii)',
      orbitRadius: '778.5 million km (5.20 AU)',
      averageTemperature: '-108°C',
      atmosphere: 'Composed mainly of hydrogen and helium',
      numberOfMoons: '79 known',
      funFact: 'Jupiter Great Red Spot is a giant storm that has been raging for over 400 years.'
    },
    Saturn: {
      type: 'planet',
      radius: '58,232 km (9.449 Earth radii)',
      orbitRadius: '1.43 billion km (9.54 AU)',
      averageTemperature: '-138°C',
      atmosphere: 'Composed mainly of hydrogen and helium',
      numberOfMoons: '82 known',
      funFact: 'Saturn rings are made mostly of water ice and rock.'
    },
    Uranus: {
      type: 'planet',
      radius: '25,362 km (4.007 Earth radii)',
      orbitRadius: '2.87 billion km (19.19 AU)',
      averageTemperature: '-195°C',
      atmosphere: 'Composed of hydrogen, helium, and methane',
      numberOfMoons: '27 known',
      funFact: 'Uranus rotates on its side, with its axis tilted at 98 degrees.'
    },
    Neptune: {
      type: 'planet',
      radius: '24,622 km (3.883 Earth radii)',
      orbitRadius: '4.50 billion km (30.07 AU)',
      averageTemperature: '-201°C',
      atmosphere: 'Composed of hydrogen, helium, and methane',
      numberOfMoons: '14 known',
      funFact: 'Neptune has the strongest winds in the solar system, reaching speeds of 2,100 km/h.'
    },
    Pluto: {
      type: 'dwarf planet',
      radius: '1,188.3 km (0.187 Earth radii)',
      orbitRadius: '5.91 billion km (39.48 AU)',
      averageTemperature: '-229°C',
      atmosphere: 'Very thin, composed mainly of nitrogen with traces of methane and carbon monoxide',
      numberOfMoons: '5 known',
      funFact: 'Pluto was reclassified from a planet to a dwarf planet in 2006.'
    },
    'Halley\'s Comet': {
      type: 'comet',
      radius: '11 km',
      orbitRadius: 'Varies (perihelion: 0.59 AU, aphelion: 35.1 AU)',
      composition: 'Ice, dust, and rocky particles',
      orbitalPeriod: '75-76 years',
      discoveryDate: 'Prehistoric (first recorded observation: 240 BCE)',
      funFact: 'Halley Comet is visible from Earth every 75-76 years, with its next appearance expected in 2061.'
    },
    Ceres: {
      type: 'dwarf planet',
      radius: '469.7 km (0.074 Earth radii)',
      orbitRadius: '413.7 million km (2.77 AU)',
      composition: 'Rock and ice',
      orbitalPeriod: '4.6 years',
      discoveryDate: '1801',
      funFact: 'Ceres is the largest object in the asteroid belt between Mars and Jupiter.'
    },
    Bennu: {
      type: 'near-Earth asteroid',
      radius: '262.5 m',
      orbitRadius: '168 million km (1.13 AU)',
      composition: 'Carbon-rich rock',
      orbitalPeriod: '1.2 years',
      discoveryDate: '1999',
      funFact: 'Bennu was the target of NASA OSIRIS-REx sample return mission.'
    },
    '99942 Apophis': {
      type: 'potentially hazardous asteroid',
      radius: '170 m',
      orbitRadius: '148 million km (0.99 AU)',
      composition: 'Rock and metal',
      orbitalPeriod: '323.6 days',
      discoveryDate: '2004',
      funFact: 'Apophis will pass extremely close to Earth in 2029, but its no longer considered a significant impact threat.'
    }
  };
  
  const DetailCard = ({ object, onClose }) => {
    const objectDetails = objectInfo[object.name];
  
    return (
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '80%',
        background: 'rgba(20, 20, 30, 0.95)',
        borderRadius: '12px',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        zIndex: 1000,
      }}>
        {/* Image Section */}
        <div style={{
          flex: 1,
          backgroundColor: '#111',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img 
            src={object.textureUrl} 
            alt={object.name} 
            style={{
              width: '100%', 
              height: '100%', 
              objectFit: 'contain', 
              borderRadius: '10px'
            }} 
          />
        </div>
  
        {/* Details Section */}
        <div style={{
          flex: 2,
          padding: '25px',
          color: 'white',
          overflowY: 'auto',
          lineHeight: '1.6',
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        }}>
          {/* Title and Introduction */}
          <h2 style={{
            fontSize: '2em', 
            marginBottom: '0.5em',
            borderBottom: '2px solid #888', 
            paddingBottom: '10px'
          }}>
            {object.name}
          </h2>
          <p style={{ marginBottom: '1em', fontSize: '1.2em', fontWeight: '300', color: '#aaa' }}>
            {`The ${object.name} is a ${objectDetails.type} known for its ${objectDetails.radius} radius, and it plays a crucial role in our solar system. With an orbit radius of ${objectDetails.orbitRadius}, ${object.name} has unique characteristics that distinguish it from other celestial bodies. Learn more about its atmosphere, temperature, and other fascinating details below.`}
          </p>
  
          {/* Object Details */}
          <div>
            <p><strong>Type:</strong> {objectDetails.type}</p>
            <p><strong>Radius:</strong> {objectDetails.radius}</p>
            <p><strong>Orbit Radius:</strong> {objectDetails.orbitRadius}</p>
            {objectDetails.averageTemperature && <p><strong>Average Temperature:</strong> {objectDetails.averageTemperature}</p>}
            {objectDetails.atmosphere && <p><strong>Atmosphere:</strong> {objectDetails.atmosphere}</p>}
            {objectDetails.numberOfMoons && <p><strong>Number of Moons:</strong> {objectDetails.numberOfMoons}</p>}
            {objectDetails.age && <p><strong>Age:</strong> {objectDetails.age}</p>}
            {objectDetails.spectralType && <p><strong>Spectral Type:</strong> {objectDetails.spectralType}</p>}
            {objectDetails.composition && <p><strong>Composition:</strong> {objectDetails.composition}</p>}
            {objectDetails.orbitalPeriod && <p><strong>Orbital Period:</strong> {objectDetails.orbitalPeriod}</p>}
            {objectDetails.discoveryDate && <p><strong>Discovery Date:</strong> {objectDetails.discoveryDate}</p>}
          </div>
        </div>
  
        {/* Close Button */}
        <button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          ×
        </button>
      </div>
    );
  };
  
  export default DetailCard;