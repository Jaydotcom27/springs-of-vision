import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'string',
      validation: (rule) => rule.max(140),
    }),
    defineField({
      name: 'featuredImages',
      title: 'Featured Images (4)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (rule) => rule.required().min(4).max(4),
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Supporting Text',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'ctaButtonLabel',
      title: 'CTA Button Label',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'ctaButtonHref',
      title: 'CTA Button Link',
      type: 'string',
      description: 'Example: /portfolio',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaImage',
      title: 'CTA Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],
})
