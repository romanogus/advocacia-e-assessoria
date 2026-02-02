import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Área de Atuação',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Resumo',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})