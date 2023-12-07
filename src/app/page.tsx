import { writeFile } from 'fs/promises'
import { join } from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function ServerUploadPage() {
  async function upload(data: FormData) {
    'use server'

    const file: File | null = data.get('file') as unknown as File
    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = join('/', 'Users/bmgaf/Desktop/project3/images', file.name)
    await writeFile(path, buffer)
    return { success: true }
  }
  return (
    /*
    <main>
      <h1>React Server Component: Upload</h1>
      <form action={upload}>
        <input type="file" name="file" />
        <input type="submit" value="Upload" />
      </form>
      <h1>Test</h1>
    </main>
    */
    <body className="bg-gray-100 min-h-screen flex flex-col justify-center items-center m-8">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg ">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form action="" method="post">
          <div className="mb-4">
            <label for="username" className="block text-sm font-medium mb-1">Username</label>
            <input type="text" name="username" id="username" className="w-full px-3 py-2 rounded-md border focus:border-gray-400" />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-medium rounded-md bg-gray-800 text-white hover:bg-gray-700">Login</button>
        </form>
      </div>
    </body>
  )
}