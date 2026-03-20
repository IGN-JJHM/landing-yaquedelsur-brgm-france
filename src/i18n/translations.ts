export type Locale = 'es' | 'fr' | 'en';

export const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      elProyecto: 'Metodología',
      recursos: 'Recursos',
    },
    hero: {
      badge: 'Gestión de aguas subterráneas',
      title1: 'Explorando el',
      title2: 'Yaque del Sur',
      title3: 'desde sus aguas subterráneas',
      description:
        'Accede a mapas temáticos e información hidrogeológica validada sobre la cuenca del Yaque del Sur, con datos oficiales para la planificación y la adaptación al cambio climático.',
      badges: {
        datosOficiales: 'Datos Oficiales',
        accesoPublico: 'Acceso Público',
        infoValidada: 'Información Validada',
        colaboracion: 'Colaboración IGN-BRGM',
      },
      floatingCards: {
        mapas: 'Mapas Interactivos',
        mapasSub: 'Acceso público',
        datos: 'Datos Oficiales',
        datosSub: 'Validados y certificados',
      },
    },
    proyecto: {
      title: 'El proyecto',
      paragraph1Before: 'El proyecto ',
      paragraph1Bold: '"Mejora de la gestión de las aguas subterráneas en la República Dominicana en contexto de cambio climático"',
      paragraph1After:
        ', desarrollado entre 2023 y 2026 por el BRGM (Servicio Geológico Nacional de Francia), la Agencia Francesa de Desarrollo (AFD), el Ministerio de la Presidencia (MINPRE) y el Ministerio de Medio Ambiente y Recursos Naturales (MIMARENA), tiene como objetivo fortalecer el conocimiento y la gestión sostenible de los recursos hídricos subterráneos.',
      paragraph2:
        'Como parte fundamental, se recopilaron y consolidaron datos provenientes de instituciones clave como el Instituto Nacional de Recursos Hidráulicos (INDRHI), el Instituto Nacional de Aguas Potables y Alcantarillados (INAPA), el Instituto Geográfico Nacional "José Joaquín Hungría Morell" (IGN-JJHM), el Servicio Geológico Nacional (SGN) y la Fundación Sur Futuro.',
    },
    metodologia: {
      title: 'Metodología',
      description:
        'El informe técnico describe la metodología de elaboración de los mapas temáticos del Yaque del Sur: recopilación de datos de instituciones dominicanas, integración en base de datos, modelización hidrogeológica y producción cartográfica. Incluye mapas de calidad natural del agua, presiones por nitratos y pesticidas, potencial hidrogeológico y recarga al horizonte 2055.',
      buttonText: 'Consultar informe',
    },
    features: {
      title: 'Mapas interactivos',
      subtitle:
        'Explora y visualiza mapas sobre calidad del agua subterránea, presiones antrópicas y potencial hidrogeológico de la cuenca del Yaque del Sur a través de nuestro geovisor interactivo',
      openViewer: 'Geovisor',
      verMetadatos: 'Metadatos',
      maps: [
        {
          title: 'Calidad predictiva del agua respecto al fluoruro',
          description:
            'Integra datos de monitoreo y condiciones geológicas para identificar zonas con mayor concentración potencial.',
        },
        {
          title: 'Índice de la aptitud de los terrenos a recargar',
          description:
            'Capacidad de recarga pluvial en la cuenca. Basado en el Índice de Desarrollo y Persistencia de la Red (IDPR).',
        },
        {
          title: 'Lluvia efectiva',
          description:
            'Representa el agua que logra infiltrarse en el suelo. Se calcula a partir del balance hídrico considerando precipitación, evapotranspiración y características del suelo.',
        },
        {
          title: 'Potencial hidrogeológico',
          description:
            'Representa espacialmente la aptitud del territorio para la presencia, almacenamiento y explotación de las aguas subterráneas.',
        },
        {
          title: 'Presión significativa en nitrato de origen agrícola',
          description:
            'Representa la presión agrícola significativa sobre las aguas subterráneas.',
        },
        {
          title: 'Presión significativa en pesticidas de origen agrícola',
          description:
            'Mapa del impacto agrícola por pesticidas en las aguas subterráneas.',
        },
        {
          title: 'Recarga potencial',
          description:
            'Recarga potencial por lluvia, obtenido a partir de la combinación de la lluvia efectiva y la capacidad de infiltración del terreno.',
        },
        {
          title: 'Cambios de recarga potencial anual modelo HadGEM2-ES',
          description:
            'Recarga potencial de los acuíferos de la cuenca al horizonte 2055.',
        },
        {
          title: 'Cambios de recarga potencial anual modelo MPI-ESM-LR',
          description:
            'Recarga potencial de los acuíferos de la cuenca al horizonte 2055.',
        },
      ],
    },
    descargas: {
      title: 'Recursos descargables',
      subtitle:
        'Accede y descarga mapas temáticos y datos geográficos generados para la cuenca del Yaque del Sur.',
      recursos: [
        {
          title: 'Mapas temáticos',
          description:
            'Descarga versiones en PDF de los principales mapas temáticos del proyecto, listos para impresión o consulta.',
          items: [
            {
              name: 'Calidad predictiva del agua respecto al fluoruro',
              url: '/docs/Calidad-natural-predictiva-del-agua-respecto-al-fluoruro.pdf',
              size: '14 MB',
            },
            {
              name: 'Presión significativa en nitrato de origen agrícola',
              url: '/docs/Presion-significativa-relacionada-con-los-nitratos.pdf',
              size: '29 MB',
            },
            {
              name: 'Presión significativa en pesticidas de origen agrícola',
              url: '/docs/Presion-significativa-relacionada-con-los-pesticidas.pdf',
              size: '28 MB',
            },
            {
              name: 'Potencial hidrogeológico',
              url: '/docs/Potencial-Hidrogeologico.pdf',
              size: '34 MB',
            },
            {
              name: 'Potencial hidrogeológico, IDPR, Lluvia efectiva y Recarga potencial',
              url: '/docs/Potencial-Hidrogeologico-IDPR-Lluvia-Efectiva-Recarga-Potencial.pdf',
              size: '59 MB',
            },
            {
              name: 'Cambios de recarga potencial anual al horizonte 2055',
              url: '/docs/Cambios-de-recarga-potencial-anual-al-horizonte-2055.pdf',
              size: '20 MB',
            },
          ],
          note: '',
          videoUrl: '',
          videoButton: '',
        },
        {
          title: 'Datos geoespaciales',
          description:
            'Descarga el conjunto de datos geoespaciales utilizados para elaborar los mapas temáticos del Yaque del Sur.',
          items: [
            { name: 'Conjunto de datos: Mapas temáticos del río Yaque del Sur', url: '/datos-sig/Mapas-tematicos-Yaque-del-Sur_gpkg.zip', format: 'GeoPackage' },
          ],
          note: 'Nota: Este conjunto de datos está diseñado para ser utilizado en software de Sistemas de Información Geográfica (SIG). Le recomendamos ver el siguiente video tutorial para su correcta visualización y uso en QGIS.',
          videoUrl: 'https://youtu.be/AEoQCcDRjO0',
          videoButton: 'Ver tutorial',
        },
      ],
    },
    community: {
      title: 'Colaboradores',
      subtitle: 'Este proyecto es desarrollado conjuntamente por instituciones líderes en geografía y geología',
    },
    cta: {
      title: 'Tu opinión es muy importante para nosotros.',
      description: 'Como parte de nuestro compromiso con la calidad y la mejora continua, nos gustaría conocer tu valoración sobre este proyecto.',
      closing: 'Te invitamos a completar este breve formulario de evaluación del contenido.',
      button: 'Compártenos tu opinión',
    },
    footer: {
      faq: 'Preguntas frecuentes',
      privacidad: 'Política de privacidad',
      copyright: '© 2026 Todos los derechos reservados. Desarrollado por el IGN-JJHM.',
    },
  },
  fr: {
    nav: {
      inicio: 'Accueil',
      elProyecto: 'Méthodologie',
      recursos: 'Ressources',
    },
    hero: {
      badge: 'Étude géologique intégrale',
      title1: 'Explorer le',
      title2: 'Yaque del Sur',
      title3: 'depuis ses racines',
      description: 'Accédez aux informations géologiques et cartographiques validées sur le bassin du Yaque del Sur, avec des données officielles pour la planification et le développement durable.',
      badges: {
        datosOficiales: 'Données officielles',
        accesoPublico: 'Accès public',
        infoValidada: 'Information validée',
        colaboracion: 'Collaboration IGN-BRGM',
      },
      floatingCards: {
        mapas: 'Cartes interactives',
        mapasSub: 'Accès public',
        datos: 'Données officielles',
        datosSub: 'Validées et certifiées',
      },
    },
    proyecto: {
      title: 'Le projet',
      paragraph1Before: 'Le projet ',
      paragraph1Bold: '"Amélioration de la gestion des eaux souterraines en République dominicaine dans un contexte de changement climatique"',
      paragraph1After:
        ', développé entre 2023 et 2026 par le BRGM (Service géologique national de France), l\'Agence française de développement (AFD), le Ministère de la Présidence (MINPRE) et le Ministère de l\'Environnement et des Ressources naturelles (MIMARENA), vise à renforcer la connaissance et la gestion durable des ressources en eau souterraine.',
      paragraph2:
        'Dans le cadre de ce projet, des données provenant d\'institutions clés telles que l\'Institut national des ressources hydrauliques (INDRHI), l\'Institut national des eaux potables et des égouts (INAPA), l\'Institut géographique national "José Joaquín Hungría Morell" (IGN-JJHM), le Service géologique national (SGN) et la Fondation Sur Futuro ont été collectées et consolidées.',
    },
    metodologia: {
      title: 'Méthodologie',
      description:
        "Le rapport technique décrit la méthodologie d'élaboration des cartes thématiques du Yaque del Sur : collecte de données auprès d'institutions dominicaines, intégration en base de données, modélisation hydrogéologique et production cartographique. Il inclut les cartes de qualité naturelle des eaux, pressions par nitrates et pesticides, potentiel hydrogéologique et recharge à l'horizon 2055.",
      buttonText: 'Consulter le rapport',
    },
    features: {
      title: 'Cartes interactives',
      subtitle:
        'Explorez et visualisez des cartes sur la qualité des eaux souterraines, les pressions anthropiques et le potentiel hydrogéologique du bassin du Yaque del Sur via notre géovisieur interactif',
      openViewer: 'Géovisuel',
      verMetadatos: 'Métadonnées',
      maps: [
        {
          title: 'Qualité naturelle des eaux souterraines',
          description:
            'Identifie les zones où la géologie peut engendrer des concentrations naturellement élevées en sulfates et fluorure dans les eaux souterraines.',
        },
        {
          title: "Pression en nitrates d'origine agricole",
          description:
            'Localise les secteurs où les activités agricoles exercent une pression significative sur la ressource en eau souterraine via les nitrates (données 2024–2025).',
        },
        {
          title: "Pression en pesticides d'origine agricole",
          description:
            'Montre les zones où les pesticides associés aux pratiques agricoles peuvent affecter la qualité des eaux souterraines.',
        },
        {
          title: 'Potentiel hydrogéologique des aquifères',
          description:
            'Synthétise les unités hydrogéologiques, la capacité d’infiltration et les paramètres hydrodynamiques pour évaluer le potentiel des aquifères du bassin.',
        },
        {
          title: 'Recharge potentielle à l’horizon 2055',
          description:
            'Présente l’évolution possible de la recharge potentielle des aquifères et des variables climatiques entre 2041–2070 par rapport à 1976–2005.',
        },
        {
          title: 'Carte géologique du sous-sol',
          description:
            'Représente les formations géologiques et lithologies qui conditionnent l\'écoulement et la qualité des eaux souterraines dans le bassin.',
        },
        {
          title: 'Occupation et utilisation des sols',
          description:
            'Identifie les types de couverture et d\'utilisation du territoire qui influencent la recharge et les pressions sur la ressource en eau.',
        },
        {
          title: 'Vulnérabilité à la pollution',
          description:
            'Évalue la susceptibilité des aquifères à la pollution selon les caractéristiques du terrain et la profondeur de la nappe phréatique.',
        },
        {
          title: 'Réseau hydrographique et points d\'eau',
          description:
            'Localise rivières, ruisseaux et points de captation pour contextualiser la relation entre eaux de surface et souterraines.',
        },
      ],
    },
    descargas: {
      title: 'Téléchargeables',
      subtitle: 'Accédez et téléchargez des informations cartographiques et géologiques validées.',
      recursos: [
        {
          title: 'Cartes thématiques',
          description: 'Téléchargez des cartes topographiques, cartographiques et thématiques au format PDF prêtes pour l\'impression ou la consultation.',
          items: [
            { name: 'Qualité prédictive de l\'eau par rapport au fluorure', url: '/docs/Calidad-natural-predictiva-del-agua-respecto-al-fluoruro.pdf' },
            { name: 'Pression significative en nitrates d\'origine agricole', url: '/docs/Presion-significativa-relacionada-con-los-nitratos.pdf' },
            { name: 'Pression significative en pesticides d\'origine agricole', url: '/docs/Presion-significativa-relacionada-con-los-pesticidas.pdf' },
            { name: 'Potentiel hydrogéologique', url: '/docs/Potencial-Hidrogeologico.pdf' },
            { name: 'Potentiel hydrogéologique, IDPR, pluie effective et recharge potentielle', url: '/docs/Potencial-Hidrogeologico-IDPR-Lluvia-Efectiva-Recarga-Potencial.pdf' },
            { name: 'Changements de recharge potentielle annuelle à l\'horizon 2055', url: '/docs/Cambios-de-recarga-potencial-anual-al-horizonte-2055.pdf' },
          ],
          note: '',
          videoUrl: '',
          videoButton: '',
        },
        {
          title: 'Données géospatiales',
          description: 'Accédez aux jeux de données géographiques dans des formats standard pour une utilisation dans les systèmes d\'information géographique.',
          items: [
            { name: 'Conjunto de datos mapas temáticos Yaque del Sur', url: '/datos-sig/Mapas-tematicos-Yaque-del-Sur_gpkg.zip', format: 'GeoPackage' },
          ],
          note: 'Note : Cet ensemble de données est conçu pour être utilisé dans un logiciel de Système d\'Information Géographique (SIG). Nous vous recommandons de consulter le tutoriel vidéo suivant pour une visualisation et une utilisation correctes dans QGIS.',
          videoUrl: 'https://www.youtube.com/results?search_query=QGIS+tutoriel+importer+donn%C3%A9es+SIG',
          videoButton: 'Voir le tutoriel vidéo',
        },
      ],
    },
    community: {
      title: 'Partenaires',
      subtitle: 'Ce projet est développé conjointement par des institutions leaders en géographie et géologie',
    },
    cta: {
      title: 'Votre avis est très important pour nous.',
      description: "Dans le cadre de notre engagement en faveur de la qualité et de l'amélioration continue, nous aimerions connaître votre évaluation de ce rapport.",
      closing: 'Nous vous invitons à compléter ce bref questionnaire de satisfaction.',
      button: 'Partagez-nous votre avis',
    },
    footer: {
      faq: 'Questions fréquentes',
      privacidad: 'Politique de confidentialité',
      copyright: '© 2026 Tous droits réservés. Développé par l\'IGN-JJHM.',
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      elProyecto: 'Methodology',
      recursos: 'Resources',
    },
    hero: {
      badge: 'Comprehensive geological study',
      title1: 'Exploring the',
      title2: 'Yaque del Sur',
      title3: 'from its roots',
      description: 'Access validated geological and cartographic information on the Yaque del Sur basin, with official data for planning and sustainable development.',
      badges: {
        datosOficiales: 'Official Data',
        accesoPublico: 'Public Access',
        infoValidada: 'Validated Information',
        colaboracion: 'IGN-BRGM Collaboration',
      },
      floatingCards: {
        mapas: 'Interactive Maps',
        mapasSub: 'Public access',
        datos: 'Official Data',
        datosSub: 'Validated and certified',
      },
    },
    proyecto: {
      title: 'The project',
      paragraph1Before: 'The project ',
      paragraph1Bold: '"Improving groundwater management in the Dominican Republic in a climate change context"',
      paragraph1After:
        ', developed between 2023 and 2026 by BRGM (French Geological Survey), the French Development Agency (AFD), the Ministry of the Presidency (MINPRE) and the Ministry of Environment and Natural Resources (MIMARENA), aims to strengthen knowledge and sustainable management of groundwater resources.',
      paragraph2:
        'As a fundamental part, data from key institutions such as the National Institute of Hydraulic Resources (INDRHI), the National Institute of Potable Water and Sewerage (INAPA), the National Geographic Institute "José Joaquín Hungría Morell" (IGN-JJHM), the National Geological Service (SGN) and the Sur Futuro Foundation were collected and consolidated.',
    },
    metodologia: {
      title: 'Methodology',
      description:
        'The technical report describes the methodology for producing the thematic maps of the Yaque del Sur: data collection from Dominican institutions, database integration, hydrogeological modelling and cartographic production. It includes maps of natural water quality, nitrate and pesticide pressures, hydrogeological potential and recharge by 2055.',
      buttonText: 'View report',
    },
    features: {
      title: 'Interactive maps',
      subtitle:
        'Explore and visualise maps on groundwater quality, anthropogenic pressures and hydrogeological potential of the Yaque del Sur basin through our interactive geoviewer',
      openViewer: 'Geoviewer',
      verMetadatos: 'Metadata',
      maps: [
        {
          title: 'Natural groundwater quality',
          description:
            'Identifies areas where geology can generate naturally elevated concentrations of sulphate and fluoride in groundwater.',
        },
        {
          title: 'Agricultural nitrate pressure',
          description:
            'Locates sectors where agricultural activities exert significant pressure on groundwater resources through nitrates (2024–2025 data).',
        },
        {
          title: 'Agricultural pesticide pressure',
          description:
            'Shows areas where pesticides associated with agricultural practices may affect groundwater quality.',
        },
        {
          title: 'Hydrogeological potential of aquifers',
          description:
            'Synthesises hydrogeological units, infiltration capacity and hydrodynamic parameters to assess the potential of the basin’s aquifers.',
        },
        {
          title: 'Potential recharge by 2055',
          description:
            'Presents the possible future evolution of potential aquifer recharge and climate variables between 2041–2070 compared to 1976–2005.',
        },
        {
          title: 'Geological map of the subsurface',
          description:
            'Represents geological formations and lithologies that condition groundwater flow and quality in the basin.',
        },
        {
          title: 'Land use and land cover',
          description:
            'Identifies types of land cover and land use that influence recharge and pressures on water resources.',
        },
        {
          title: 'Vulnerability to contamination',
          description:
            'Evaluates aquifer susceptibility to contamination based on terrain characteristics and water table depth.',
        },
        {
          title: 'Hydrographic network and water points',
          description:
            'Locates rivers, streams and water abstraction points to contextualise the relationship between surface and groundwater.',
        },
      ],
    },
    descargas: {
      title: 'Downloads',
      subtitle: 'Access and download validated cartographic and geological information.',
      recursos: [
        {
          title: 'Thematic maps',
          description: 'Download topographic, cartographic and thematic maps in PDF format ready for printing or consultation.',
          items: [
            { name: 'Predictive water quality with respect to fluoride', url: '/docs/Calidad-natural-predictiva-del-agua-respecto-al-fluoruro.pdf' },
            { name: 'Significant pressure from nitrates of agricultural origin', url: '/docs/Presion-significativa-relacionada-con-los-nitratos.pdf' },
            { name: 'Significant pressure from pesticides of agricultural origin', url: '/docs/Presion-significativa-relacionada-con-los-pesticidas.pdf' },
            { name: 'Hydrogeological potential', url: '/docs/Potencial-Hidrogeologico.pdf' },
            { name: 'Hydrogeological potential, IDPR, effective rainfall and potential recharge', url: '/docs/Potencial-Hidrogeologico-IDPR-Lluvia-Efectiva-Recarga-Potencial.pdf' },
            { name: 'Changes in annual potential recharge by 2055', url: '/docs/Cambios-de-recarga-potencial-anual-al-horizonte-2055.pdf' },
          ],
          note: '',
          videoUrl: '',
          videoButton: '',
        },
        {
          title: 'Geospatial Data',
          description: 'Access geographic datasets in standard formats for use in geographic information systems.',
          items: [
            { name: 'Conjunto de datos mapas temáticos Yaque del Sur', url: '/datos-sig/Mapas-tematicos-Yaque-del-Sur_gpkg.zip', format: 'GeoPackage' },
          ],
          note: 'Note: This dataset is designed to be used in Geographic Information System (GIS) software. We recommend watching the following video tutorial for correct visualization and use in QGIS.',
          videoUrl: 'https://www.youtube.com/results?search_query=QGIS+tutorial+load+GIS+dataset',
          videoButton: 'Watch tutorial video',
        },
      ],
    },
    community: {
      title: 'Partners',
      subtitle: 'This project is jointly developed by leading institutions in geography and geology',
    },
    cta: {
      title: 'Your opinion is very important to us.',
      description: 'As part of our commitment to quality and continuous improvement, we would like to know your assessment of this report.',
      closing: 'We invite you to complete this brief satisfaction questionnaire.',
      button: 'Share your opinion with us',
    },
    footer: {
      faq: 'FAQ',
      privacidad: 'Privacy policy',
      copyright: '© 2026 All rights reserved. Developed by IGN-JJHM.',
    },
  },
} as const;
