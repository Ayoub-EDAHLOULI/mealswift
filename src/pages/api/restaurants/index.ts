/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import fs from 'fs/promises'
import path from 'path'

export const config = {
  api: {
    bodyParser: false,
  },
}

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return await getRestaurants(req, res)
    case 'POST':
      return await addRestaurant(req, res)
    default:
      return res.status(405).json({ message: 'Méthode non autorisée' })
  }
}

// Obtenir tous les restaurants
async function getRestaurants(req: NextApiRequest, res: NextApiResponse) {
  try {
    const restaurants = await prisma.restaurant.findMany()
    res.status(200).json(restaurants)
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des restaurants' })
  }
}

// Ajouter un nouveau restaurant
async function addRestaurant(req: NextApiRequest, res: NextApiResponse) {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  const options: formidable.Options = {
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
  }

  const form = formidable(options)

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors du traitement du formulaire' })
    }

    try {
      let imageUrl = null
      let iconUrl = null
      if (files.image) {
        const image = Array.isArray(files.image) ? files.image[0] : files.image
        const newPath = path.join(uploadDir, image.newFilename)
        await fs.rename(image.filepath, newPath)
        imageUrl = `/uploads/${image.newFilename}`
      }
      if (files.icon) {
        const icon = Array.isArray(files.icon) ? files.icon[0] : files.icon
        const newPath = path.join(uploadDir, icon.newFilename)
        await fs.rename(icon.filepath, newPath)
        iconUrl = `/uploads/${icon.newFilename}`
      }

      const newRestaurant = await prisma.restaurant.create({
        data: {
          nom: Array.isArray(fields.nom) ? fields.nom[0] : fields.nom ?? '',
          adresse: Array.isArray(fields.adresse) ? fields.adresse[0] : fields.adresse ?? '',
          type_cuisine: Array.isArray(fields.type_cuisine) ? fields.type_cuisine[0] : fields.type_cuisine ?? '',
          horaires: Array.isArray(fields.horaires) ? fields.horaires[0] : fields.horaires ?? '',
          email: Array.isArray(fields.email) ? fields.email[0] : fields.email ?? '',
          phone: Array.isArray(fields.phone) ? fields.phone[0] : fields.phone ?? '',
          website: Array.isArray(fields.website) ? fields.website[0] : fields.website ?? '',
          image_url: imageUrl ?? '',
          icon_url: iconUrl ?? '',
        },
      })

      res.status(201).json(newRestaurant)
    } catch (error) {
      console.error('Erreur lors de l\'ajout du restaurant:', error)
      res.status(500).json({ message: 'Erreur lors de l\'ajout du restaurant' })
    }
  })
}