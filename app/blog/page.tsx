import SampleBlogs from "@/config/sampleblogs"
import { buttonVariants } from "@/components/ui/button"

interface BlogType{
    slug: string;
    content: string;
    title: string;
    image?: string;
}
const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SampleBlogs.map((blog: BlogType, index: number) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-slate-900">
                    <img className="w-full h-48 object-cover" src={blog.image} alt={blog.title}/>
                    <div className="p-4">
                        <h2 className="text-xl text-gray-800 dark:text-gray-200 font-semibold mb-2">{blog.title}</h2>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">{blog.content}</p>
                        <a href={`/blog/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Read More</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BlogPage