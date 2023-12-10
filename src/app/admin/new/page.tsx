import { redirect } from "next/navigation"
import { prisma } from '/Users/bmgaf/Desktop/project3/project3/src/app/db'

async function createTenant(data: FormData) {
    "use server"
    
    const name = data.get("name")?.valueOf()
  
    const phone = data.get("phone")?.valueOf()

    const email = data.get("email")?.valueOf()

    const appartment = data.get("apptNumber")?.valueOf()

    await prisma.tenants.create({data : {name, phone, email, appartment}})
    redirect('/admin');

    
  }

export default async function Home() {
    
    return (
        <body className=" bg-slate-900">
        <div className=" m-28 border bg-slate-600 p-8">
            <h1 className=" text-3xl pb-8 text-white">New Tenant Form</h1>
    <form action={createTenant}>
        <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Smith" required/>
        </div>  
        <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="555-555-5555" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
        </div>  
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
        </div>
        <div className="mb-6">
            <label htmlFor="apptNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appartment Number</label>
            <input type="text" id="apptNumber" name="apptNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10B" required/>
        </div>   
        <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

</div>

</body>
    )
}