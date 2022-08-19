const template = {
  form: {
    'Antecedentes Familiares': {
      description:
        'Indica si algún miembro de tu familia ha sido diagnosticado de una de las siguientes enfermedades o problemas de salud. Si tienes más que un hermano/a, marca la casilla si alguno de ellos tiene una de las enfermedades de la lista',
      groups: {
        corazon: {
          label: 'ENFERMEDADES DEL CORAZON',
          icon: 'enfermedadesCorazon',
          required:true,
          questions: {
            enfermedades_del_corazon_anemia: {
              required: true,
              label: 'Anemias',
              type: 'radio3',
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_anemia_family: {
                  required: true,
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_anemia_observaciones: {
                  required: true,
                  type: 'comment',
                  label: '',
                },
                enfermedades_del_corazon_anemia_edad: {
                  required: true,
                  type: 'date',
                  label: '',
                },
              },
            },
            enfermedades_del_corazon_aneurisma_aortico: {
              required: true,
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_aneurisma_aortico_family: {
                  required: true,
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_aneurisma_aortico_observaciones: {
                  required: true,
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Aneurisma aórtico',
              type: 'radio3',
            },
            enfermedades_del_corazon_fibrilacion_auricular: {
              required: true,
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_fibrilacion_auricular_family: {
                  required: true,
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_fibrilacion_auricular_observaciones: {
                  required: true,
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Fibrilación Auricular',
              type: 'radio3',
            },
            enfermedades_del_corazon_insuficiencia_cardiaca_congestiva: {
              required: true,
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_insuficiencia_cardiaca_congestiva_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_insuficiencia_cardiaca_congestiva_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Insuficiencia cardíaca congestiva',
              type: 'radio3',
            },
            enfermedades_del_corazon_enfermedad_coronaria_de_las_arterias_coronarias: {
              required: true,
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_enfermedad_coronaria_de_las_arterias_coronarias_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_enfermedad_coronaria_de_las_arterias_coronarias_observaciones:
                  {
                    type: 'comment',
                    label: '',
                  },
              },
              label:
                'Enfermedad coronaria / de las arterias coronarias (incluida la angina de pecho)',
              type: 'radio3',
            },
            enfermedades_del_corazon_infarto_del_corazon: {
              required: true,
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_infarto_del_corazon_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_infarto_del_corazon_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Infarto del corazón',
              type: 'radio3',
            },
            enfermedades_del_corazon_enfermedad_de_valvulas_del_corazon: {
              required: true,
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_enfermedad_de_valvulas_del_corazon_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_enfermedad_de_valvulas_del_corazon_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Enfermedad de válvulas del corazón',
              type: 'radio3',
            },
            enfermedades_del_corazon_hipertension: {
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_hipertension_family: {
                  required:true,
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_hipertension_observaciones: {
                  required:true,
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Hipertensión (presión arterial alta)',
              type: 'radio3',
            },
            enfermedades_del_corazon_colesterol_alto: {
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_colesterol_alto_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_colesterol_alto_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Colesterol alto',
              type: 'radio3',
            },
            enfermedades_del_corazon_enfermedad_vascular_periferica: {
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_enfermedad_vascular_periferica_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_enfermedad_vascular_periferica_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Enfermedad vascular periférica',
              type: 'radio3',
            },
            enfermedades_del_corazon_embolia_en_los_pulmones: {
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_embolia_en_los_pulmones_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_embolia_en_los_pulmones_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Embolia en los pulmones o trombosis de las venas profundas (TVP)',
              type: 'radio3',
            },
            enfermedades_del_corazon_anemia_de_celulas_falciformes: {
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_anemia_de_celulas_falciformes_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_anemia_de_celulas_falciformes_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Anemia de células falciformes',
              type: 'radio3',
            },
            enfermedades_del_corazon_accidente_cerebrovascular: {
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_accidente_cerebrovascular_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_accidente_cerebrovascular_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Accidente cerebrovascular',
              type: 'radio3',
            },
            enfermedades_del_corazon_muerte_subita: {
              subgroup: {
                _dependency: 'Si',
                enfermedades_del_corazon_muerte_subita_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_corazon_muerte_subita_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
              label: 'Muerte súbita',
              type: 'radio3',
            },
          },
        },
        digestivas: {
          icon: 'gastroestinal',
          label: 'ENFERMEDADES DIGESTIVAS',
          questions: {
            enfermedades_digestivas_reflujo: {
              type: 'radio3',
              label: 'Reflujo',

              subgroup: {
                _dependency: 'Si',
                enfermedades_digestivas_reflujo_family: { type: 'familiar', label: '' },
                enfermedades_digestivas_reflujo_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_digestivas_enfermedad_celiaca: {
              type: 'radio3',
              label: 'Enfermedad celíaca',

              subgroup: {
                _dependency: 'Si',
                enfermedades_digestivas_enfermedad_celiaca_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_digestivas_enfermedad_celiaca_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_digestivas_polipos_colon: {
              type: 'radio3',
              label: 'Pólipos en el colon',

              subgroup: {
                _dependency: 'Si',
                enfermedades_digestivas_polipos_colon_family: { type: 'familiar', label: '' },
                enfermedades_digestivas_polipos_colon_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },

            enfermedades_digestivas_enfermedad_crohn: {
              type: 'radio3',
              label: 'Enfermedad de Crohn',

              subgroup: {
                _dependency: 'Si',
                enfermedades_digestivas_enfermedad_crohn_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_digestivas_enfermedad_crohn_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_digestivas_diveriticulosis: {
              type: 'radio3',
              label: 'Diveriticulosis',

              subgroup: {
                _dependency: 'Si',
                enfermedades_digestivas_diveriticulosis_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_digestivas_diveriticulosis_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_digestivas_calculos_biliares: {
              type: 'radio3',
              label: 'Cálculos biliares (piedras en la vesícula biliar)',

              subgroup: {
                _dependency: 'Si',
                enfermedades_digestivas_calculos_biliares_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_digestivas_calculos_biliares_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_digestivas_intestino_irritable: {
              type: 'radio3',
              label: 'Síndrome del intestino irritable',

              subgroup: {
                _dependency: 'Si',
                enfermedades_digestivas_intestino_irritable_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_digestivas_intestino_irritable_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_digestivas_enfermedad_hepatica: {
              type: 'radio3',
              label: 'Enfermedad hepática',

              subgroup: {
                _dependency: 'Si',
                enfermedades_digestivas_enfermedad_hepatica_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_digestivas_enfermedad_hepatica_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_digestivas_colitis_ulcerosa: {
              type: 'radio3',
              label: 'Colitis ulcerosa (ulceras e inflamación del intestino)',

              subgroup: {
                _dependency: 'Si',
                enfermedades_digestivas_colitis_ulcerosa_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_digestivas_colitis_ulcerosa_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_digestivas_ulcera_pepticas: {
              type: 'radio3',
              label: 'Úlceras pépticas (gástrica)',

              subgroup: {
                _dependency: 'Si',
                enfermedades_digestivas_ulcera_pepticas_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_digestivas_ulcera_pepticas_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
          },
        },
        endocrino: {
          label: 'ENFERMEDADES DEL SISTEMA ENDÓCRINO/HORMONALES',
          icon: 'enfermedadesHormonales',
          questions: {
            enfermedades_hormonales_hipertiroidismo: {
              type: 'radio3',

              label: 'Hipertiroidismo',
              subgroup: {
                _dependency: 'Si',
                enfermedades_hormonales_hipertiroidismo_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_hormonales_hipertiroidismo_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_hormonales_hipotiroidismo: {
              type: 'radio3',

              label: 'Hipotiroidismo',
              subgroup: {
                _dependency: 'Si',
                enfermedades_hormonales_hipotiroidismo_family: { type: 'familiar', label: '' },
                enfermedades_hormonales_hipotiroidismo_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },

            enfermedades_hormonales_diabetes_tipo_1: {
              type: 'radio3',

              label: 'Diabetes tipo 1',
              subgroup: {
                _dependency: 'Si',
                enfermedades_hormonales_diabetes_tipo_1_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_hormonales_diabetes_tipo_1_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_hormonales_diabetes_tipo_2: {
              type: 'radio3',

              label: 'Diabetes tipo 2',
              subgroup: {
                _dependency: 'Si',
                enfermedades_hormonales_diabetes_tipo_2_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_hormonales_diabetes_tipo_2_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_hormonales_otro_tipo_diabetes: {
              type: 'radio3',

              label: 'Otro tipo de diabetes conocido/desconocido',
              subgroup: {
                _dependency: 'Si',
                enfermedades_hormonales_otro_tipo_diabetes_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_hormonales_otro_tipo_diabetes_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
          },
        },
        rinon: {
          label: 'ENFERMEDADES DEL RIÑON',
          icon: 'enfermedadesRinon',
          questions: {
            enfermedades_del_rinon_enfermedad_renal: {
              type: 'radio3',
              label: 'Enfermedad Renal',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_rinon_enfermedad_renal_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_rinon_enfermedad_renal_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_del_rinon_calculo_en_rinon: {
              type: 'radio3',
              label: 'Cálculos en los riñones (piedras en los riñones)',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_rinon_calculo_en_rinon_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_rinon_calculo_en_rinon_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
          },
        },
        pulmon: {
          label: 'ENFERMEDADES DE LOS PULMONES',
          icon: 'enfermedadesPulmon',
          questions: {
            enfermedades_del_pulmon_asma: {
              type: 'radio3',
              label: 'Asma',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_pulmon_asma_family: { type: 'familiar', label: '' },
                enfermedades_del_pulmon_asma_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_del_pulmon_enfermedad_cronica_de_los_pulmones: {
              type: 'radio3',
              label: 'Enfermedad crónica de los pulmones (EPOC, enfisema o bronquitis)',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_pulmon_enfermedad_cronica_de_los_pulmones_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_pulmon_enfermedad_cronica_de_los_pulmones_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_del_pulmon_apnea: {
              type: 'radio3',
              label: 'Apnea del sueño',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_pulmon_apnea_family: { type: 'familiar', label: '' },
                enfermedades_del_pulmon_apnea_observaciones: { type: 'comment', label: '' },
              },
            },
          },
        },
        cerebro: {
          label: 'ENFERMEDADES DEL CEREBRO Y EL SISTEMA NERVIOSO',
          icon: 'enfermedadesCerebro',
          questions: {
            enfermedades_del_cerebro_demencia: {
              type: 'radio3',
              label: 'Demencia (incluye Alzheimer, vascular, etc.)',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_cerebro_demencia_family: { type: 'familiar', label: '' },
                enfermedades_del_cerebro_demencia_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_del_cerebro_epilepsia: {
              type: 'radio3',
              label: 'Epilepsia o convulsiones',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_cerebro_epilepsia_family: { type: 'familiar', label: '' },
                enfermedades_del_cerebro_epilepsia_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_del_cerebro_enfermedad_de_lou_gehrig: {
              type: 'radio3',
              label: 'Enfermedad de Lou Gehrig (Esclerosis lateral amiotrófica)',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_cerebro_enfermedad_de_lou_gehrig_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_cerebro_enfermedad_de_lou_gehrig_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_del_cerebro_migranas: {
              type: 'radio3',
              label: 'Migrañas',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_cerebro_migranas_family: { type: 'familiar', label: '' },
                enfermedades_del_cerebro_migranas_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_del_cerebro_esclerosis_multiple: {
              type: 'radio3',
              label: 'Esclerosis múltiple',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_cerebro_esclerosis_multiple_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_cerebro_esclerosis_multiple_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_del_cerebro_distrofia_muscular: {
              type: 'radio3',
              label: 'Distrofia muscular',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_cerebro_distrofia_muscular_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_cerebro_distrofia_muscular_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_del_cerebro_narcolepsia: {
              type: 'radio3',
              label: 'Narcolepsia',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_cerebro_narcolepsia_family: { type: 'familiar', label: '' },
                enfermedades_del_cerebro_narcolepsia_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_del_cerebro_neuropatia: {
              type: 'radio3',
              label: 'Neuropatía',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_cerebro_neuropatia_family: { type: 'familiar', label: '' },
                enfermedades_del_cerebro_neuropatia_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_del_cerebro_enfermedad_parkinson: {
              type: 'radio3',
              label: 'Enfermedad de Parkinson',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_cerebro_enfermedad_parkinson_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_cerebro_enfermedad_parkinson_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_del_cerebro_enfermedad_sindrome_piernas_inquietas: {
              type: 'radio3',
              label: 'Síndrome de las piernas inquietas',

              subgroup: {
                _dependency: 'Si',
                enfermedades_del_cerebro_enfermedad_sindrome_piernas_inquietas_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_del_cerebro_enfermedad_sindrome_piernas_inquietas_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
          },
        },
        mental: {
          label: 'ENFERMEDADES MENTALES Y USO DE SUSTANCIAS',
          icon: 'neurologica',
          questions: {
            enfermedades_mentales_consumo_alcohol: {
              type: 'radio3',
              label: 'Enfermedad relacionada con el consumo de alcohol',

              subgroup: {
                _dependency: 'Si',
                enfermedades_mentales_consumo_alcohol_family: { type: 'familiar', label: '' },
                enfermedades_mentales_consumo_alcohol_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_mentales_ansiedad: {
              type: 'radio3',
              label: 'Trastorno de ansiedad/trastorno de pánico',

              subgroup: {
                _dependency: 'Si',
                enfermedades_mentales_ansiedad_family: { type: 'familiar', label: '' },
                enfermedades_mentales_ansiedad_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_mentales_autismo: {
              type: 'radio3',
              label: 'Autismo',

              subgroup: {
                _dependency: 'Si',
                enfermedades_mentales_autismo_family: { type: 'familiar', label: '' },
                enfermedades_mentales_autismo_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_mentales_trastorno_bipolar: {
              type: 'radio3',
              label: 'Trastorno bipolar',

              subgroup: {
                _dependency: 'Si',
                enfermedades_mentales_trastorno_bipolar_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_mentales_trastorno_bipolar_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_mentales_depresion: {
              type: 'radio3',
              label: 'Depresión',

              subgroup: {
                _dependency: 'Si',
                enfermedades_mentales_depresion_family: { type: 'familiar', label: '' },
                enfermedades_mentales_depresion_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_mentales_consumo_drogas: {
              type: 'radio3',
              label: 'Enfermedad relacionada con el consumo de drogas',

              subgroup: {
                _dependency: 'Si',
                enfermedades_mentales_consumo_drogas_family: { type: 'familiar', label: '' },
                enfermedades_mentales_consumo_drogas_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_mentales_esquizofrenia: {
              type: 'radio3',
              label: 'Esquizofrenia',

              subgroup: {
                _dependency: 'Si',
                enfermedades_mentales_esquizofrenia_family: { type: 'familiar', label: '' },
                enfermedades_mentales_esquizofrenia_observaciones: { type: 'comment', label: '' },
              },
            },
          },
        },
        osteo: {
          label: 'ENFERMEDADES DE LOS HUESOS, ARTICULACIONES Y MÚSCULOS',
          icon: 'musculoOseo',
          questions: {
            enfermedades_huesos_fibromialgia: {
              type: 'radio3',
              label: 'Fibromialgia',

              subgroup: {
                _dependency: 'Si',
                enfermedades_huesos_fibromialgia_family: { type: 'familiar', label: '' },
                enfermedades_huesos_fibromialgia_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_huesos_gota: {
              type: 'radio3',
              label: 'Gota',

              subgroup: {
                enfermedades_huesos_gota_family: { type: 'familiar', label: '' },
                enfermedades_huesos_gota_observaciones: { type: 'comment', label: '' },
                _dependency: 'Si',
              },
            },
            enfermedades_huesos_osteoartritis: {
              type: 'radio3',
              label: 'Osteoartritis',

              subgroup: {
                _dependency: 'Si',
                enfermedades_huesos_osteoartritis_family: { type: 'familiar', label: '' },
                enfermedades_huesos_osteoartritis_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_huesos_osteoporosis: {
              type: 'radio3',
              label: 'Osteoporosis',

              subgroup: {
                _dependency: 'Si',
                enfermedades_huesos_osteoporosis_family: { type: 'familiar', label: '' },
                enfermedades_huesos_osteoporosis_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_huesos_seudogota: {
              type: 'radio3',
              label: 'Seudogota',

              subgroup: {
                _dependency: 'Si',
                enfermedades_huesos_seudogota_family: { type: 'familiar', label: '' },
                enfermedades_huesos_seudogota_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_huesos_artritis_reumatoide: {
              type: 'radio3',
              label: 'Artritis reumatoide',

              subgroup: {
                _dependency: 'Si',
                enfermedades_huesos_artritis_reumatoide_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_huesos_artritis_reumatoide_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_huesos_lupus_sistemico: {
              type: 'radio3',
              label: 'Lupus sistémico',

              subgroup: {
                _dependency: 'Si',
                enfermedades_huesos_lupus_sistemico_family: { type: 'familiar', label: '' },
                enfermedades_huesos_lupus_sistemico_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_huesos_problemas_columna_vertebral: {
              type: 'radio3',
              label: 'Problemas de los músculos y huesos de la columna vertebral (no cáncer)',

              subgroup: {
                _dependency: 'Si',
                enfermedades_huesos_problemas_columna_vertebral_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_huesos_problemas_columna_vertebral_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
          },
        },
        oncologica: {
          label: 'ENFERMEDAD ONCOLÓGICA',
          icon: 'oncologica',
          questions: {
            enfermedades_oncologica_hematologica: {
              type: 'radio3',
              label: 'Hematológica (leucemia, linfoma, mielodisplasia, mieloma múltiple, etc)',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_hematologica_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_hematologica_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_mama: {
              type: 'radio3',
              label: 'Mama',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_mama_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_mama_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_utero: {
              type: 'radio3',
              label: 'Útero',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_utero_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_utero_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_ovario: {
              type: 'radio3',
              label: 'Ovario',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_ovario_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_ovario_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_prostata: {
              type: 'radio3',
              label: 'Próstata',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_prostata_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_prostata_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_pulmon: {
              type: 'radio3',
              label: 'Pulmón',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_pulmon_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_pulmon_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_gastrico: {
              type: 'radio3',
              label: 'Gástrico',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_gastrico_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_gastrico_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_higado: {
              type: 'radio3',
              label: 'Hígado',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_higado_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_higado_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_pancreas: {
              type: 'radio3',
              label: 'Páncreas',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_pancreas_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_pancreas_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_vesicula: {
              type: 'radio3',
              label: 'Vesícula',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_vesicula_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_vesicula_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_colon: {
              type: 'radio3',
              label: 'Colon',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_colon_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_colon_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_rinon: {
              type: 'radio3',
              label: 'Riñón',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_rinon_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_rinon_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_piel: {
              type: 'radio3',
              label: 'Piel',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_piel_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_piel_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_cerebro: {
              type: 'radio3',
              label: 'Cerebro',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_cerebro_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_cerebro_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_oncologica_otros: {
              type: 'radio3',
              label: 'Otros',

              subgroup: {
                _dependency: 'Si',
                enfermedades_oncologica_otros_family: { type: 'familiar', label: '' },
                enfermedades_oncologica_otros_observaciones: { type: 'comment', label: '' },
              },
            },
          },
        },
        oidos_ojos: {
          label: 'ENFERMEDADES DE LOS OÍDOS Y LOS OJOS',
          icon: 'enfermedadesOjos',
          questions: {
            enfermedades_ojos_y_oidos_cataratas: {
              type: 'radio3',
              label: 'Cataratas',

              subgroup: {
                _dependency: 'Si',
                enfermedades_ojos_y_oidos_cataratas_family: { type: 'familiar', label: '' },
                enfermedades_ojos_y_oidos_cataratas_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_ojos_y_oidos_glaucoma: {
              type: 'radio3',
              label: 'Glaucoma',

              subgroup: {
                _dependency: 'Si',
                enfermedades_ojos_y_oidos_glaucoma_family: { type: 'familiar', label: '' },
                enfermedades_ojos_y_oidos_glaucoma_observaciones: { type: 'comment', label: '' },
              },
            },

            enfermedades_ojos_y_oidos_degeneracion_macular: {
              type: 'radio3',
              label: 'Degeneración macular',

              subgroup: {
                _dependency: 'Si',
                enfermedades_ojos_y_oidos_degeneracion_macular_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_ojos_y_oidos_degeneracion_macular_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_ojos_y_oidos_perdida_grave_audicion: {
              type: 'radio3',
              label: 'Pérdida grave de la audición',

              subgroup: {
                _dependency: 'Si',
                enfermedades_ojos_y_oidos_perdida_grave_audicion_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_ojos_y_oidos_perdida_grave_audicion_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
            enfermedades_ojos_y_oidos_sordera_parcial: {
              type: 'radio3',
              label: 'Sordera parcial en uno o ambos oídos',

              subgroup: {
                _dependency: 'Si',
                enfermedades_ojos_y_oidos_sordera_parcial_family: {
                  type: 'familiar',
                  label: '',
                },
                enfermedades_ojos_y_oidos_sordera_parcial_observaciones: {
                  type: 'comment',
                  label: '',
                },
              },
            },
          },
        },
      },
    },
  },
}

export default template
