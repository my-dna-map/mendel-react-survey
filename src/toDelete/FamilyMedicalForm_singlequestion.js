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
          },
        }
      },
    },
  },
}

export default template
