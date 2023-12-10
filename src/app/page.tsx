import { writeFile } from 'fs/promises'
import { join } from 'path'
import { prisma } from './db'

export default function ServerUploadPage() {

  async function upload(data: FormData) {
    'use server'

    const file: File | null = data.get('file') as unknown as File
    if (!file) {
      throw new Error('No file uploaded')
    }
    
    const appNumber = data.get("appNumber")?.valueOf()

    const area = data.get("area")?.valueOf()

    const discription = data.get("message")?.valueOf()

    const picture = file.name;
    console.log(appNumber);
    await prisma.requests.create({data : {appNumber, area, discription, picture}});

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = join('/', 'Users/bmgaf/Desktop/project3/project3/public/images', file.name)
    await writeFile(path, buffer)

    return { success: true }
  }
  return (
    <main className=" m-24">
      <h1 className=' text-white text-7xl mx-96 pb-10'> Maintenance request </h1>
      <div className=' mx-52 bg-slate-500 p-8'>
      <form action={upload} id="request">
        <div className="mb-6">
          <label htmlFor="appNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appartment Number</label>
          <input type="text" id="appNumber" name="appNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div> 
        <div className="mb-6">
          <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
          <select id="area" name="area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected value="no area">Choose an area</option>
          <option value="kitchen">Kitchen</option>
          <option value="bathroom">Bathroom</option>
          <option value="bedroom">Bedroom</option>
          </select>
        </div>
        <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discription</label>
            <textarea id="message" name="message" rows={4} className="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Discription"></textarea>
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file">Upload an Image</label>
            <input className="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file" name="file" type="file"/>
       </div>
        <input type="submit" value="Upload" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"/>
      </form>
      </div>
    </main>
    
  )
}