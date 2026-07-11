'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../Componente/Footer';

const BRANDS = {
  'bmw': {
    name: 'BMW',
    hero: {
      image: '/marcas/bmw/hero2.jpg',
      subtitle: 'Desde hace décadas, BMW transforma cada trayecto en una experiencia única.',
      statements: [
        'Precisión en cada curva.',
        'Equilibrio entre potencia y confort.',
        'La pasión por conducir.'
      ]
    },
    models: [
      {
        name: 'BMW M3 E30',
        year: '1986-1992',
        description: 'Una leyenda del automovilismo nacida con el único fin de homologar el modelo para el campeonato de turismos DTM (Grupo A). Para competir, la FIA exigía fabricar un mínimo de 5,000 unidades de calle, pero BMW superó las expectativas produciendo casi 18,000 vehículos. Esta obra de arte de la ingeniería de la división BMW M detiene la báscula en solo 1,200 kg y destaca por una carrocería ensanchada con aerodinámica real, donde el pilar C y la luneta trasera fueron modificados exclusivamente para dirigir el flujo de aire hacia su icónico alerón trasero.<br/><br/>Bajo el capó late el legendario motor S14, un bloque atmosférico de cuatro cilindros y 2.3 litros con culata de 16 válvulas heredada del superdeportivo M1 y de la Fórmula 1, capaz de estirar por encima de las 7,000 rpm con una potencia inicial de 200 CV. Acoplado a una caja manual con primera hacia atrás (dog-leg) y tracción trasera, el M3 E30 se convirtió en el auto de turismo más exitoso de la historia, conquistando múltiples títulos en el DTM, el BTCC, las 24 Horas de Nürburgring y logrando una mítica victoria en el Rally de Córcega de 1987.<br/><br/>El mito se consolidó con evoluciones extremas de colección como el Evolution II (220 CV), la edición Cecotto (215 CV) y la máxima expresión del modelo, el Sport Evolution (2.5 litros y 238 CV), consolidándolo como el pilar fundacional de la deportividad pura y la conexión perfecta entre piloto, máquina y asfalto.',
        image: '/marcas/bmw/m3-e30.webp'
      },
      {
        name: 'BMW M3 E46',
        year: '2000-2006',
        description: 'Representa la era dorada de la división BMW M y la cúspide de una filosofía purista inolvidable. Con 85,744 unidades vendidas, esta obra de arte atemporal diseñada por Joji Nagashima destaca por sus salpicaderas ensanchadas, cofre de aluminio con joroba y cuatro salidas de escape. Su ingeniería logró el equilibrio perfecto entre pureza mecánica y vanguardia, consagrando al legendario motor S54 atmosférico de 3.2 litros y seis cilindros en línea, el cual entrega 343 CV y ruge con un aullido metálico icónico hasta las 8,000 RPM.<br/><br/>Equipado con gestión de mariposas individuales y caja manual o automatizada SMG II, ofrece una dinámica impecable gracias a su reparto de pesos 50:50, chasis de alta rigidez y diferencial autoblocante M variable. El mito de esta generación se consolidó con versiones de colección sumamente cotizadas: el radical M3 CSL, aligerado en 110 kg con techo de fibra de carbono y potenciado a 360 CV (1,383 unidades); el Competition Package (ZCP) con mejoras dinámicas; y el ultra exclusivo M3 GTR, un unicornio homologado para calle con motor V8 de 4.0 litros y 380 CV (solo 10 unidades).<br/><br/>En definitiva, el E46 es el eslabón sagrado que unió magistralmente pasión, historia, ingeniería y diseño para definir el alto rendimiento de toda una generación.',
        image: '/marcas/bmw/m3-e46.webp'
      },
      {
        name: 'BMW M4 G82',
        year: '2020-Presente',
        description: 'Representa el cenit de la ingeniería digital y la audacia vanguardista de la división BMW M, redefiniendo el coupé de alto rendimiento para la era moderna. Diseñado con una estética polarizante y agresiva, destaca por su controvertida pero funcional parrilla de riñones verticales, esculpida para satisfacer las inmensas demandas de refrigeración de su planta motriz. Su construcción inteligente equilibra la masa mediante un techo de polímero reforzado con fibra de carbono (CFRP) y un chasis de rigidez torsional drásticamente incrementada.<br/><br/>En su núcleo late el soberbio motor S58 de 3.0 litros y seis cilindros en línea M TwinPower Turbo. Heredado de la competición, entrega 510 CV y 650 Nm de torque en sus versiones Competition, catapultándolo de 0 a 100 km/h en apenas 3.9 segundos (o 3.5 segundos con el sofisticado sistema de tracción integral M xDrive). Este bloque se gestiona mediante una transmisión M Steptronic de 8 velocidades y un sistema de frenado integrado ajustable.<br/><br/>El verdadero legado del G82 radica en su dualidad absoluta: es una lujosa cabina digitalizada con pantallas curvas para el confort diario que, mediante los botones rojos M del volante, se transforma de inmediato en un arma de precisión quirúrgica lista para pulverizar récords en los circuitos.',
        image: '/marcas/bmw/m4-g82.webp'
      }
    ],
engineering: {
  text: 'La ingeniería de BMW se basa en la búsqueda del equilibrio perfecto. Cada componente está diseñado para trabajar en armonía, creando una experiencia de conducción que conecta al piloto con la máquina.  <br/> Bloque S58 de 6 cilindros en línea M TwinPower Turbo que entrega 510 hp y un torque de 650 Nm.',
  details: [
    { title: 'Motor', description: 'Bloque S58 de 6 cilindros en línea M TwinPower Turbo que entrega 510 hp y un torque de 650 Nm.', image: '/marcas/bmw/engine.webp' },
    { title: 'Faros', description: 'Ópticas Full-LED adaptativas de alta intensidad con un diseño afilado y firmas lumínicas M específicas.', image: '/marcas/bmw/faros.webp' },
    { title: 'Interior', description: 'Cabina deportiva con el sistema BMW Curved Display y acabados de lujo orientados al conductor.', image: '/marcas/bmw/m4-interior.webp' },
    { title: 'Volante', description: 'Aro M de cuero con levas de cambio y los botones rojos M1/M2 para configuraciones dinámicas.', image: '/marcas/bmw/volante.webp' },
    { title: 'Sistema de escape', description: 'Escape deportivo M con válvulas de mariposa controladas electrónicamente que optimiza el flujo y genera un sonido imponente.', image: '/marcas/bmw-m4/img-second-3.webp' },
    { title: 'Llantas', description: 'Rines forjados de doble medida (19" adelante y 20" atrás) para maximizar la tracción y el agarre.', image: '/marcas/bmw/m4-g82.webp' }

      ]
    },
    articles: [
      {
        title: '¿Cómo nació la división M?',
        category: 'HISTORIA',
        image: '/marcas/bmw/M.jpg',
        slug: 'division-m'
      },
      {
        title: 'De un videojuego a la realidad: La leyenda del M3 GTR de NFS',
        category: 'LEYENDAS',
        image: '/marcas/bmw/m3Gtr.jpg',
        slug: 'm3-e30'
      },
      {
        title: 'La evolución del seis cilindros en línea',
        category: 'INGENIERÍA',
        image: '/marcas/bmw/motor6.jpg',
        slug: 'inline-6'
      }
    ],
  },

  'rolls-royce': {
    name: 'Rolls Royce',
    hero: {
      image: '/marcas/rolls-royce/hero.jpg',
      video: '/marcas/rolls-royce/hero.mp4',
      subtitle: 'Desde 1906, Rolls Royce ha demostrado que la excelencia es atemporal.',
      statements: [
        'Es refinamiento.',
        'Es lujo.',
        'Es perfección.'
      ]
    },
    philosophy: {
      text: 'Rolls Royce entiende que un automóvil debe ser más que un medio de transporte. Cada modelo es una obra de arte diseñada para ofrecer la experiencia más refinada y exclusiva posible.'
    },
    models: [
      {
        name: 'Rolls Royce Phantom',
        year: '2003-Presente',
        description: 'El estándar de la excelencia.',
        image: '/marcas/rolls-royce/phantom.jpg'
      },
      {
        name: 'Rolls Royce Ghost',
        year: '2009-Presente',
        description: 'El lujo minimalista.',
        image: '/marcas/rolls-royce/ghost.jpg'
      },
      {
        name: 'Rolls Royce Cullinan',
        year: '2018-Presente',
        description: 'El SUV más exclusivo del mundo.',
        image: '/marcas/rolls-royce/cullinan.jpg'
      }
    ],
    engineering: {
      text: 'La ingeniería de Rolls Royce se basa en la obsesión por el detalle. Cada componente está diseñado y fabricado con los materiales más finos, desde la alfombra hasta el motor V12.',
      details: [
        { title: 'Motor V12', image: '/marcas/rolls-royce/engine.png' },
        { title: 'Faros', image: '/marcas/rolls-royce/lights.png' },
        { title: 'Interior', image: '/marcas/rolls-royce/interior.png' },
        { title: 'Volante', image: '/marcas/rolls-royce/steering.png' },
        { title: 'Madera', image: '/marcas/rolls-royce/wood.png' },
        { title: 'Llantas', image: '/marcas/rolls-royce/wheels.png' }
      ]
    },
    articles: [
      {
        title: 'La historia de Rolls Royce',
        category: 'HISTORIA',
        image: '/marcas/rolls-royce/article-1.png',
        slug: 'rolls-history'
      },
      {
        title: 'El arte de la mano de obra',
        category: 'CRAFTSMANSHIP',
        image: '/marcas/rolls-royce/article-2.png',
        slug: 'craftsmanship'
      },
      {
        title: 'El Espíritu del Éxtasis',
        category: 'LEYENDAS',
        image: '/marcas/rolls-royce/article-3.png',
        slug: 'spirit-of-ecstasy'
      }
    ],
  },

  'porsche': {
    name: 'Porsche',
    hero: {
      image: '/marcas/porsche/hero.jpg',
      video: '/marcas/porsche/hero.mp4',
      subtitle: 'Desde 1963, Porsche ha demostrado que la evolución no requiere sacrificar la identidad.',
      statements: [
        'Es tradición.',
        'Es innovación.',
        'Es atemporalidad.'
      ]
    },
    philosophy: {
      text: 'Porsche entiende que un automóvil deportivo puede ser mucho más que rápido. Puede ser usable, confiable y emocionante todos los días, sin perder su esencia en la pista.'
    },
    models: [
      {
        name: 'Porsche 911 Classic',
        year: '1963-1989',
        description: 'El icono que definió una era.',
        image: '/marcas/porsche/911-classic.jpg'
      },
      {
        name: 'Porsche 911 GT3 RS',
        year: '2019-Presente',
        description: 'La máxima expresión del 911 en circuito.',
        image: '/marcas/porsche/gt3-rs.jpg'
      },
      {
        name: 'Porsche 911 Turbo S',
        year: '2020-Presente',
        description: 'El equilibrio entre confort y rendimiento extremo.',
        image: '/marcas/porsche/turbo-s.jpg'
      }
    ],
    engineering: {
      text: 'La filosofía de Porsche se basa en la mejora constante. Cada generación refina la fórmula original, incorporando tecnología de vanguardia sin alterar el ADN que hace del 911 un icono.',
      details: [
        { title: 'Motor', image: '/marcas/porsche/engine.jpg' },
        { title: 'Alerón activo', image: '/marcas/porsche/wing.jpg' },
        { title: 'Interior', image: '/marcas/porsche/interior.jpg' },
        { title: 'Volante', image: '/marcas/porsche/steering.jpg' },
        { title: 'Chasis', image: '/marcas/porsche/chassis.jpg' },
        { title: 'Llantas', image: '/marcas/porsche/wheels.jpg' }
      ]
    },
    articles: [
      {
        title: 'La historia del 911: De 1963 al presente',
        category: 'HISTORIA',
        image: '/marcas/porsche/article-1.png',
        slug: '911-history'
      },
      {
        title: '¿Por qué el motor trasero es esencial?',
        category: 'INGENIERÍA',
        image: '/marcas/porsche/article-2.jpg',
        slug: 'rear-engine'
      },
      {
        title: 'El secreto de la aerodinámica del GT3 RS',
        category: 'TECNOLOGÍA',
        image: '/marcas/porsche/article-3.jpg',
        slug: 'gt3-aero'
      }
    ],
  },
  'ferrari': {
    name: 'Ferrari',
    hero: {
      image: '/marcas/ferrari/hero.jpg',
      video: '/marcas/ferrari/hero.mp4',
      subtitle: 'Desde 1947, Ferrari ha demostrado que la pasión es el motor más potente.',
      statements: [
        'Es emoción.',
        'Es excelencia.',
        'Es legado.'
      ]
    },
    philosophy: {
      text: 'Ferrari entiende que un automóvil deportivo debe despertar emociones. Cada modelo es una obra de arte diseñada para conectar el corazón del conductor con la carretera.'
    },
    models: [
      {
        name: 'Ferrari 250 GTO',
        year: '1962-1964',
        description: 'El automóvil más valioso de la historia.',
        image: '/marcas/ferrari/250-gto.jpg'
      },
      {
        name: 'Ferrari F40',
        year: '1987-1992',
        description: 'El último Ferrari aprobado por Enzo.',
        image: '/marcas/ferrari/f40.jpg'
      },
      {
        name: 'Ferrari SF90 Stradale',
        year: '2019-Presente',
        description: 'El primer híbrido enchufable de Ferrari.',
        image: '/marcas/ferrari/sf90.jpg'
      }
    ],
    engineering: {
      text: 'La ingeniería de Ferrari se basa en la búsqueda de la perfección. Cada componente está diseñado para maximizar el rendimiento y la emoción, desde el motor hasta la aerodinámica.',
      details: [
        { title: 'Motor V12', image: '/marcas/ferrari/engine.jpg' },
        { title: 'Aerodinámica', image: '/marcas/ferrari/aero.jpg' },
        { title: 'Interior', image: '/marcas/ferrari/interior.jpg' },
        { title: 'Volante', image: '/marcas/ferrari/steering.jpg' },
        { title: 'Chasis', image: '/marcas/ferrari/chassis.jpg' },
        { title: 'Llantas', image: '/marcas/ferrari/wheels.jpg' }
      ]
    },
    articles: [
      {
        title: 'La historia del Cavallino Rampante',
        category: 'HISTORIA',
        image: '/marcas/ferrari/article-1.jpg',
        slug: 'cavallino'
      },
      {
        title: '¿Por qué el V12 es el corazón de Ferrari?',
        category: 'INGENIERÍA',
        image: '/marcas/ferrari/article-2.jpg',
        slug: 'v12-heart'
      },
      {
        title: 'El legado de Enzo Ferrari',
        category: 'LEYENDAS',
        image: '/marcas/ferrari/article-3.jpg',
        slug: 'enzo-legacy'
      }
    ],
  },
  'pagani': {
    name: 'Pagani',
    hero: {
      image: '/marcas/pagani/hero.jpg',
      video: '/marcas/pagani/hero.mp4',
      subtitle: 'Desde 1992, Pagani ha demostrado que el arte y la ingeniería pueden ser uno solo.',
      statements: [
        'Es arte.',
        'Es obsesión.',
        'Es perfección.'
      ]
    },
    philosophy: {
      text: 'Pagani entiende que cada automóvil debe ser una obra de arte única. Cada componente es diseñado y fabricado con una obsesión por el detalle que desafía la lógica convencional.'
    },
    models: [
      {
        name: 'Pagani Zonda',
        year: '1999-2017',
        description: 'El sueño que se hizo realidad.',
        image: '/marcas/pagani/zonda.jpg'
      },
      {
        name: 'Pagani Huayra',
        year: '2012-Presente',
        description: 'La evolución del arte automotriz.',
        image: '/marcas/pagani/huayra.jpg'
      },
      {
        name: 'Pagani Utopia',
        year: '2022-Presente',
        description: 'El equilibrio entre analogía y tecnología.',
        image: '/marcas/pagani/utopia.jpg'
      }
    ],
    engineering: {
      text: 'La ingeniería de Pagani se basa en la obsesión por el detalle. Cada componente es fabricado a mano con materiales de la más alta calidad, desde fibra de carbono hasta titanio.',
      details: [
        { title: 'Motor V12', image: '/marcas/pagani/engine.jpg' },
        { title: 'Fibra de carbono', image: '/marcas/pagani/carbon.jpg' },
        { title: 'Interior', image: '/marcas/pagani/interior.jpg' },
        { title: 'Volante', image: '/marcas/pagani/steering.jpg' },
        { title: 'Chasis', image: '/marcas/pagani/chassis.jpg' },
        { title: 'Llantas', image: '/marcas/pagani/wheels.jpg' }
      ]
    },
    articles: [
      {
        title: 'Horacio Pagani: El artista de la ingeniería',
        category: 'LEYENDAS',
        image: '/marcas/pagani/article-1.jpg',
        slug: 'horacio-pagani'
      },
      {
        title: 'El secreto del carbono de Pagani',
        category: 'INGENIERÍA',
        image: '/marcas/pagani/article-2.jpg',
        slug: 'pagani-carbon'
      },
      {
        title: 'La historia de la Zonda',
        category: 'HISTORIA',
        image: '/marcas/pagani/article-3.jpg',
        slug: 'zonda-history'
      }
    ],
  },
  'mclaren': {
    name: 'McLaren',
    hero: {
      image: '/marcas/mclaren/hero.jpg',
      video: '/marcas/mclaren/hero.mp4',
      subtitle: 'Desde 1985, McLaren ha demostrado que la competición es el mejor laboratorio.',
      statements: [
        'Es innovación.',
        'Es velocidad.',
        'Es tecnología.'
      ]
    },
    philosophy: {
      text: 'McLaren entiende que la tecnología de competición puede transformar la experiencia de conducción. Cada modelo incorpora aprendizajes de la F1 para crear automóviles extraordinarios.'
    },
    models: [
      {
        name: 'McLaren F1',
        year: '1992-1998',
        description: 'El superdeportivo que cambió todo.',
        image: '/marcas/mclaren/f1.jpg'
      },
      {
        name: 'McLaren P1',
        year: '2013-2015',
        description: 'El híbrido que redefinió el segmento.',
        image: '/marcas/mclaren/p1.jpg'
      },
      {
        name: 'McLaren 765LT',
        year: '2020-2021',
        description: 'La máxima expresión del Longtail.',
        image: '/marcas/mclaren/765lt.jpg'
      }
    ],
    engineering: {
      text: 'La ingeniería de McLaren se basa en la transferencia de tecnología de F1. Cada componente está diseñado para maximizar el rendimiento mediante la aerodinámica activa y la ligereza.',
      details: [
        { title: 'Motor V8', image: '/marcas/mclaren/engine.jpg' },
        { title: 'Aerodinámica activa', image: '/marcas/mclaren/aero.jpg' },
        { title: 'Interior', image: '/marcas/mclaren/interior.jpg' },
        { title: 'Volante', image: '/marcas/mclaren/steering.jpg' },
        { title: 'Chasis monocasco', image: '/marcas/mclaren/chassis.jpg' },
        { title: 'Llantas', image: '/marcas/mclaren/wheels.jpg' }
      ]
    },
    articles: [
      {
        title: 'De F1 a las calles: La historia de McLaren',
        category: 'HISTORIA',
        image: '/marcas/mclaren/article-1.jpg',
        slug: 'mclaren-history'
      },
      {
        title: 'El secreto del monocasco de McLaren',
        category: 'INGENIERÍA',
        image: '/marcas/mclaren/article-2.jpg',
        slug: 'monococo'
      },
      {
        title: 'La evolución del P1',
        category: 'TECNOLOGÍA',
        image: '/marcas/mclaren/article-3.jpg',
        slug: 'p1-evolution'
      }
    ],
  },
  'lamborghini': {
    name: 'Lamborghini',
    hero: {
      image: '/marcas/lamborghini/hero.jpg',
      video: '/marcas/lamborghini/hero.mp4',
      subtitle: 'Desde 1963, Lamborghini ha demostrado que las reglas están para romperse.',
      statements: [
        'Es rebeldía.',
        'Es drama.',
        'Es poder.'
      ]
    },
    philosophy: {
      text: 'Lamborghini entiende que un automóvil deportivo debe ser dramático. Cada modelo está diseñado para provocar una reacción emocional inmediata, desde su diseño hasta su sonido.'
    },
    models: [
      {
        name: 'Lamborghini Miura',
        year: '1966-1973',
        description: 'El primer superdeportivo moderno.',
        image: '/marcas/lamborghini/miura.jpg'
      },
      {
        name: 'Lamborghini Countach',
        year: '1974-1990',
        description: 'El diseño que definió una década.',
        image: '/marcas/lamborghini/countach.jpg'
      },
      {
        name: 'Lamborghini Revuelto',
        year: '2023-Presente',
        description: 'El primer V12 híbrido de Lamborghini.',
        image: '/marcas/lamborghini/revuelto.jpg'
      }
    ],
    engineering: {
      text: 'La ingeniería de Lamborghini se basa en la búsqueda del drama. Cada componente está diseñado para maximizar el impacto visual y emocional, desde el motor V12 hasta el diseño agresivo.',
      details: [
        { title: 'Motor V12', image: '/marcas/lamborghini/engine.jpg' },
        { title: 'Aerodinámica', image: '/marcas/lamborghini/aero.jpg' },
        { title: 'Interior', image: '/marcas/lamborghini/interior.jpg' },
        { title: 'Volante', image: '/marcas/lamborghini/steering.jpg' },
        { title: 'Chasis', image: '/marcas/lamborghini/chassis.jpg' },
        { title: 'Llantas', image: '/marcas/lamborghini/wheels.jpg' }
      ]
    },
    articles: [
      {
        title: 'La historia del toro furioso',
        category: 'HISTORIA',
        image: '/marcas/lamborghini/article-1.jpg',
        slug: 'bull-history'
      },
      {
        title: '¿Por qué el V12 sigue siendo esencial?',
        category: 'INGENIERÍA',
        image: '/marcas/lamborghini/article-2.jpg',
        slug: 'v12-essential'
      },
      {
        title: 'El legado de Marcello Gandini',
        category: 'DISEÑO',
        image: '/marcas/lamborghini/article-3.jpg',
        slug: 'gandini-legacy'
      }
    ],
  },
  'audi': {
    name: 'Audi',
    hero: {
      image: '/marcas/audi/hero.jpg',
      video: '/marcas/audi/hero.mp4',
      subtitle: 'Desde 1909, Audi ha demostrado que la tecnología puede tener carácter.',
      statements: [
        'Es progreso.',
        'Es sofisticación.',
        'Es Vorsprung.'
      ]
    },
    philosophy: {
      text: 'Audi entiende que la tecnología debe ser invisible pero perceptible. Cada modelo incorpora innovación que mejora la experiencia de conducción sin comprometer el confort.'
    },
    models: [
      {
        name: 'Audi Quattro',
        year: '1980-1991',
        description: 'El que revolucionó la tracción integral.',
        image: '/marcas/audi/quattro.jpg'
      },
      {
        name: 'Audi R8',
        year: '2006-Presente',
        description: 'El superdeportivo alemán.',
        image: '/marcas/audi/r8.jpg'
      },
      {
        name: 'Audi e-tron GT',
        year: '2021-Presente',
        description: 'La electrificación con alma Audi.',
        image: '/marcas/audi/etron-gt.jpg'
      }
    ],
    engineering: {
      text: 'La ingeniería de Audi se basa en la innovación constante. Desde la tracción quattro hasta la iluminación LED matrix, cada tecnología está diseñada para mejorar la experiencia de conducción.',
      details: [
        { title: 'Motor', image: '/marcas/audi/engine.jpg' },
        { title: 'Quattro', image: '/marcas/audi/quattro-system.jpg' },
        { title: 'Interior', image: '/marcas/audi/interior.jpg' },
        { title: 'Volante', image: '/marcas/audi/steering.jpg' },
        { title: 'Chasis', image: '/marcas/audi/chassis.jpg' },
        { title: 'Llantas', image: '/marcas/audi/wheels.jpg' }
      ]
    },
    articles: [
      {
        title: 'La historia de la tracción quattro',
        category: 'HISTORIA',
        image: '/marcas/audi/article-1.jpg',
        slug: 'quattro-history'
      },
      {
        title: '¿Cómo funciona el sistema quattro?',
        category: 'INGENIERÍA',
        image: '/marcas/audi/article-2.jpg',
        slug: 'quattro-system'
      },
      {
        title: 'La evolución de la iluminación Audi',
        category: 'TECNOLOGÍA',
        image: '/marcas/audi/article-3.jpg',
        slug: 'audi-lighting'
      }
    ],
  },
  'aston-martin': {
    name: 'Aston Martin',
    hero: {
      image: '/marcas/aston-martin/hero.jpg',
      video: '/marcas/aston-martin/hero.mp4',
      subtitle: 'Desde 1913, Aston Martin ha demostrado que la elegancia es atemporal.',
      statements: [
        'Es refinamiento.',
        'Es poder.',
        'Es británico.'
      ]
    },
    philosophy: {
      text: 'Aston Martin entiende que un automóvil deportivo puede ser elegante y poderoso. Cada modelo combina diseño británico con rendimiento excepcional, creando una experiencia única.'
    },
    models: [
      {
        name: 'Aston Martin DB5',
        year: ' automobile1963-1965',
        description: 'El automóvil de James Bond.',
        image: '/marcas/aston-martin/db5.jpg'
      },
      {
        name: 'Aston Martin V8 Vantage',
        year: '1977-1990',
        description: 'El primer superdeportivo de Aston.',
        image: '/marcas/aston-martin/v8-vantage.jpg'
      },
      {
        name: 'Aston Martin Valkyrie',
        year: '2021-Presente',
        description: 'El hypercar nacido de la F1.',
        image: '/marcas/aston-martin/valkyrie.jpg'
      }
    ],
    engineering: {
      text: 'La ingeniería de Aston Martin se basa en el equilibrio entre elegancia y rendimiento. Cada componente está diseñado para ofrecer una experiencia de conducción sofisticada y emocionante.',
      details: [
        { title: 'Motor V12', image: '/marcas/aston-martin/engine.jpg' },
        { title: 'Aerodinámica', image: '/marcas/aston-martin/aero.jpg' },
        { title: 'Interior', image: '/marcas/aston-martin/interior.jpg' },
        { title: 'Volante', image: '/marcas/aston-martin/steering.jpg' },
        { title: 'Chasis', image: '/marcas/aston-martin/chassis.jpg' },
        { title: 'Llantas', image: '/marcas/aston-martin/wheels.jpg' }
      ]
    },
    articles: [
      {
        title: 'La historia de Aston Martin',
        category: 'HISTORIA',
        image: '/marcas/aston-martin/article-1.jpg',
        slug: 'aston-history'
      },
      {
        title: 'El legado de James Bond',
        category: 'CULTURA',
        image: '/marcas/aston-martin/article-2.jpg',
        slug: 'bond-legacy'
      },
      {
        title: 'La Valkyrie: F1 para la calle',
        category: 'INGENIERÍA',
        image: '/marcas/aston-martin/article-3.jpg',
        slug: 'valkyrie-f1'
      }
    ],
  },
  'mazda': {
    name: 'Mazda',
    hero: {
      image: '/marcas/mazda/hero.jpg',
      video: '/marcas/mazda/hero.mp4',
      subtitle: 'Desde 1920, Mazda ha demostrado que la emoción no requiere precio elevado.',
      statements: [
        'Es jinba ittai.',
        'Es pasión.',
        'Es accesibilidad.'
      ]
    },
    philosophy: {
      text: 'Mazda entiende que la emoción de conducir debe ser accesible. Cada modelo está diseñado para crear una conexión entre el conductor y el automóvil, independientemente del precio.'
    },
    models: [
      {
        name: 'Mazda MX-5 NA',
        year: '1989-1997',
        description: 'El roadster que revolucionó el segmento.',
        image: '/marcas/mazda/mx5-na.jpg'
      },
      {
        name: 'Mazda RX-7 FD',
        year: '1992-2002',
        description: 'El rotario que se convirtió en leyenda.',
        image: '/marcas/mazda/rx7-fd.jpg'
      },
      {
        name: 'Mazda MX-5 ND',
        year: '2015-Presente',
        description: 'La evolución del roadster perfecto.',
        image: '/marcas/mazda/mx5-nd.jpg'
      }
    ],
    engineering: {
      text: 'La ingeniería de Mazda se basa en la filosofía Jinba Ittai: caballo y jinete como uno. Cada componente está diseñado para crear una conexión perfecta entre el conductor y el automóvil.',
      details: [
        { title: 'Motor rotativo', image: '/marcas/mazda/rotary.jpg' },
        { title: 'Chasis SKYACTIV', image: '/marcas/mazda/skyactiv.jpg' },
        { title: 'Interior', image: '/marcas/mazda/interior.jpg' },
        { title: 'Volante', image: '/marcas/mazda/steering.jpg' },
        { title: 'Suspensión', image: '/marcas/mazda/suspension.jpg' },
        { title: 'Llantas', image: '/marcas/mazda/wheels.jpg' }
      ]
    },
    articles: [
      {
        title: 'La filosofía Jinba Ittai',
        category: 'FILOSOFÍA',
        image: '/marcas/mazda/article-1.jpg',
        slug: 'jinba-ittai'
      },
      {
        title: 'El legado del motor rotativo',
        category: 'INGENIERÍA',
        image: '/marcas/mazda/article-2.jpg',
        slug: 'rotary-legacy'
      },
      {
        title: 'La historia del MX-5',
        category: 'HISTORIA',
        image: '/marcas/mazda/article-3.jpg',
        slug: 'mx5-history'
      }
    ]
  },
  'nissan': {
    name: 'Nissan',
    hero: {
      image: '/marcas/nissan/hero.jpg',
      video: '/marcas/nissan/hero.mp4',
      subtitle: 'Desde 1933, Nissan ha demostrado que la ingeniería puede desafiar expectativas.',
      statements: [
        'Es innovación.',
        'Es valentía.',
        'Es accesibilidad.'
      ]
    },
    philosophy: {
      text: 'Nissan entiende que la innovación debe ser accesible. Desde el GT-R hasta el Z, cada modelo demuestra que la ingeniería de alto rendimiento no requiere un precio de lujo.'
    },
    models: [
      {
        name: 'Nissan Skyline GT-R R34',
        year: '1999-2002',
        description: 'El Godzilla que conquistó el mundo.',
        image: '/marcas/nissan/gtr-r34.jpg'
      },
      {
        name: 'Nissan 370Z NISMO',
        year: '2009-2020',
        description: 'El purista de los deportivos.',
        image: '/marcas/nissan/370z.jpg'
      },
      {
        name: 'Nissan GT-R R35',
        year: '2007-Presente',
        description: 'El superdeportivo que desafía la física.',
        image: '/marcas/nissan/gtr-r35.jpg'
      }
    ],
    engineering: {
      text: 'La ingeniería de Nissan se basa en la búsqueda de la excelencia técnica. Desde el sistema ATTESA E-TS hasta el motor VR38DETT, cada tecnología está diseñada para maximizar el rendimiento.',
      details: [
        { title: 'Motor VR38DETT', image: '/marcas/nissan/engine.jpg' },
        { title: 'ATTESA E-TS', image: '/marcas/nissan/attesa.jpg' },
        { title: 'Interior', image: '/marcas/nissan/interior.jpg' },
        { title: 'Volante', image: '/marcas/nissan/steering.jpg' },
        { title: 'Chasis', image: '/marcas/nissan/chassis.jpg' },
        { title: 'Llantas', image: '/marcas/nissan/wheels.jpg' }
      ]
    },
    articles: [
      {
        title: 'La historia del GT-R',
        category: 'HISTORIA',
        image: '/marcas/nissan/article-1.jpg',
        slug: 'gtr-history'
      },
      {
        title: '¿Cómo funciona el sistema ATTESA?',
        category: 'INGENIERÍA',
        image: '/marcas/nissan/article-2.jpg',
        slug: 'attesa-system'
      },
      {
        title: 'El legado de NISMO',
        category: 'COMPETICIÓN',
        image: '/marcas/nissan/article-3.jpg',
        slug: 'nismo-legacy'
      }
    ],
  }
};

export default function MarcaDetail() {
  const params = useParams();
  const brand = BRANDS[params.slug];

  if (!brand) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <div className="text-[10px] tracking-[6px] text-[#B8963E] font-mono mb-6">// 404</div>
          <h1 className="text-white text-5xl font-bold tracking-tight mb-6">Marca no encontrada</h1>
          <Link href="/marcas" className="text-[#B8963E] text-sm tracking-widest uppercase hover:text-[#B8963E]/80 transition-colors">
            Volver a marcas →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      
      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {brand.hero.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={brand.hero.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={brand.hero.image}
              alt={`${brand.name} hero`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              unoptimized
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative h-full flex flex-col justify-center px-4 md:px-12 lg:px-20">
          <Link href="/marcas" className="text-[#B8963E] text-sm tracking-widest uppercase hover:text-[#B8963E]/80 transition-colors mb-12">
            ← Volver a marcas
          </Link>
          
          <h1 className="text-white text-[clamp(72px,10vw,96px)] font-bold tracking-tighter mb-8">
            {brand.name}
          </h1>
          
          <p className="text-[#A0A0A0] text-[clamp(24px,4vw,32px)] font-light tracking-wide mb-12 max-w-3xl">
            {brand.hero.subtitle}
          </p>
          
          <div className="space-y-4">
            {brand.hero.statements.map((statement, index) => (
              <p key={index} className="text-white text-[clamp(20px,3vw,24px)] font-light tracking-wide">
                {statement}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* MODELOS DESTACADOS */}
      <section className="py-32 px-4 md:px-12 lg:px-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-4">// MODELOS DESTACADOS</h2>
            <div className="w-16 h-px bg-[#B8963E]" />
          </div>

          <div className="space-y-24">
            {brand.models.map((model, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
                <div className={`relative aspect-[16/9] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-white text-[clamp(32px,4vw,48px)] font-bold tracking-tight mb-4 transition-colors duration-500 ease-out group-hover:text-[#B8963E]">
                    {model.name}
                  </h3>
                  <p className="text-[#B8963E] text-lg tracking-widest uppercase mb-6">
                    {model.year}
                  </p>
                  <div 
                    className="text-[#A0A0A0] text-lg font-light tracking-wide space-y-4"
                    dangerouslySetInnerHTML={{ __html: model.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INGENIERÍA */}
      <section className="py-32 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-4">// INGENIERÍA</h2>
            <div className="w-16 h-px bg-[#B8963E]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <p className="text-white text-[clamp(18px,2.5vw,24px)] font-light leading-relaxed tracking-wide">
                {brand.engineering.text}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {brand.engineering.details.map((detail, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden group">
                  <Image
                    src={detail.image}
                    alt={detail.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:bg-black/70 transition-colors duration-700 ease-out flex flex-col justify-end p-6">
                    <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-2 transition-colors duration-500 ease-out group-hover:text-[#B8963E]">
                      {detail.title}
                    </h3>
                    {detail.description && (
                      <p className="text-neutral-300 text-sm font-light leading-relaxed">
                        {detail.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTÍCULOS RELACIONADOS */}
      <section className="py-32 px-4 md:px-12 lg:px-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[#B8963E] text-sm tracking-[6px] uppercase font-mono mb-4">// ARTÍCULOS RELACIONADOS</h2>
            <div className="w-16 h-px bg-[#B8963E]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand.articles.map((article, index) => (
              <Link key={index} href={`/articulos/${article.slug}`} className="group">
                <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                <div className="text-[#B8963E] text-xs tracking-[4px] uppercase font-mono mb-3">
                  {article.category}
                </div>
                
                <h3 className="text-white text-lg font-bold tracking-wide mb-4 group-hover:text-[#B8963E] transition-colors duration-500 ease-out">
                  {article.title}
                </h3>
                
                <div className="text-[#B8963E] text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-y-4 group-hover:translate-y-0">
                  Leer más →
                </div>
              </Link>
            ))}

            <Link href="/marcas" className="text-[#B8963E] text-lg tracking-widest uppercase hover:text-[#B8963E]/80 transition-colors">
              Explorar otra marca →
            </Link>
          </div>
        </div>
      </section>


      {/* Legacy Message */}
      <section className="py-24 px-4 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#808080] text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.3em] uppercase mb-6">
            TRANSMITIR LEGADO
          </div>
          <p className="text-[#A0A0A0] text-[clamp(1rem,1.5vw,1.2rem)] font-light tracking-wide leading-relaxed mb-8">
            Cada marca cuenta una historia. Cada historia merece ser preservada.
          </p>
          <div className="text-[#606060] text-[clamp(0.75rem,1vw,0.9rem)] tracking-[0.25em] uppercase">
            PASIÓN • CULTURA • AUTOMOTRIZ
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}
