import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";


export const metadata = {
    title:"Add Product - Flowmazon",
    description:""
}
async function addProduct(formData:FormData) {
    'use server';
    const name = formData.get('name')?.toString();
    const description = formData.get('description')?.toString();
    const imageUrl  = formData.get('imageUrl')?.toString();
    const price = Number(formData.get('price') || 0);

    if(!name || !description || !imageUrl || !price){
        throw Error ("Missing required False");
    }
    await prisma.product.create({
        data: {
            name,
            description,
            imageUrl,
            price
        }
    })
    redirect('/');
}
export default function AddProductPage() {
  return (
    <div>
        <h1 className="text-lg mb-3 font-bold">Add Product Page</h1>
        <form action={addProduct}>
            <input 
                required 
                placeholder="Name" 
                name="name"  
                className="mb-3 w-full input input-bordered " 
                type="text" />
            <textarea name="description" required placeholder="Description" className="textarea-bordered textarea mb-3 w-full" ></textarea>
            <input 
                required 
                placeholder="Image URL" 
                name="imageUrl"  
                className="mb-3 w-full input input-bordered " 
                type="url" />
            
            <input 
                required 
                placeholder="Price" 
                name="price"  
                className="mb-3 w-full input input-bordered " 
                type="number" />

            <FormSubmitButton  className="btn-block">Add Product</FormSubmitButton>
        </form>
    </div>
  )
}
